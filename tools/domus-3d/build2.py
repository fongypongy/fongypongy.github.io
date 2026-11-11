import pickle, trimesh, numpy as np, fast_simplification
from trimesh.visual.material import PBRMaterial
P = pickle.load(open('parts.pkl','rb'))
S = '/mnt/user-data/uploads/Spatial/EXE4/'
def lin(c):
    c = c / 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
def mat(rgb, rough=0.62): return PBRMaterial(baseColorFactor=[*[lin(c) for c in rgb], 1.0], metallicFactor=0.0, roughnessFactor=rough)
def split(m, origin, normal):
    a = trimesh.intersections.slice_mesh_plane(m, normal, origin, cap=False)
    b = trimesh.intersections.slice_mesh_plane(m, [-n for n in normal], origin, cap=False)
    return a, b
TEAL, WHITE, GRASS = mat((96,196,176)), mat((238,236,232), 0.8), mat((92,128,56), 0.95)
def simplify(m, keep):
    m = m.copy(); m.merge_vertices()
    if len(m.faces) > keep:
        v, f = fast_simplification.simplify(m.vertices.astype(np.float32), m.faces.astype(np.int32), target_reduction=1 - keep / len(m.faces))
        m = trimesh.Trimesh(v, f, process=True)
    return m
def add(scene, m, material, name):
    m = m.copy(); m.visual = trimesh.visual.TextureVisuals(material=material)
    scene.add_geometry(m, node_name=name, geom_name=name)
scene = trimesh.Scene()
bld = {'Chapel': (P[('Chapel','mesh0')], 70000), 'Villa': (P[('villa','brep')], 35000), 'Pavilion': (P[('pagoda','brep')], 30000), 'Basement': (P[('basement','brep')], 25000)}
for n, (m, k) in bld.items():
    s = simplify(m, k)
    s = trimesh.graph.smooth_shade(s, angle=np.radians(28))   # smooth curves, crisp edges
    add(scene, s, TEAL, n)
# base: four plates snapped back to their 2x2 grid around (200, 200)
shift = {'Base plate 1 V2': (309, -244), 'Base plate 4 V2': (309, 269), 'Base plate 2 V2': (-350, -263), 'Base plate 3 V2': (-350, 164)}
plates = []
for n, (dx, dy) in shift.items():
    m = trimesh.load(S + n + '.stl'); m.apply_translation([dx, dy, 0]); plates.append(simplify(m, 14000))
base = trimesh.util.concatenate(plates)
# green ground: cut the plates along a 16 mm rim so the grass edge is clean, then colour the
# upward-facing top inside it, leaving white pads under the buildings
rims = []
inner = base
for origin, normal in [([16,0,0],[1,0,0]), ([384,0,0],[-1,0,0]), ([0,16,0],[0,1,0]), ([0,384,0],[0,-1,0])]:
    inner, outer = split(inner, origin, normal); rims.append(outer)
c = inner.triangles_center; up = inner.face_normals[:, 2] > 0.55
pad = (c[:, 0] > 112) & (c[:, 0] < 283) & (c[:, 1] > 205) & (c[:, 1] < 288)
pav = np.hypot(c[:, 0] - 247, c[:, 1] - 155) < 36
g = up & (c[:, 2] > 125) & ~pad & ~pav
add(scene, inner.submesh([np.where(g)[0]], append=True), GRASS, 'Ground')
add(scene, trimesh.util.concatenate(rims + [inner.submesh([np.where(~g)[0]], append=True)]), WHITE, 'Base')
scene.apply_transform(trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0]))
scene.apply_scale(0.001)
b = scene.bounds; scene.apply_translation([-(b[0][0] + b[1][0]) / 2, -b[0][1], -(b[0][2] + b[1][2]) / 2])
scene.export('domus-raw.glb'); import os; print('glb', os.path.getsize('domus-raw.glb') // 1024, 'KB', 'faces', sum(len(g.faces) for g in scene.geometry.values()))
