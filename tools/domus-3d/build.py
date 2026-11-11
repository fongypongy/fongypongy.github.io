import pickle, trimesh, numpy as np, fast_simplification
P = pickle.load(open('parts.pkl','rb'))
S = '/mnt/user-data/uploads/Spatial/EXE4/'
TEAL, WHITE = [94, 200, 178, 255], [238, 236, 230, 255]
def simplify(m, keep):
    m = m.copy(); m.merge_vertices()
    if len(m.faces) > keep:
        v, f = fast_simplification.simplify(m.vertices.astype(np.float32), m.faces.astype(np.int32), target_reduction=1 - keep / len(m.faces))
        m = trimesh.Trimesh(v, f, process=True)
    return m
def coloured(m, rgba, name):
    m.visual = trimesh.visual.ColorVisuals(m, face_colors=np.tile(rgba, (len(m.faces), 1)))
    m.metadata['name'] = name; return m
scene = trimesh.Scene()
bld = {'Chapel': P[('Chapel','mesh0')], 'Villa': P[('villa','brep')], 'Pavilion': P[('pagoda','brep')], 'Basement': P[('basement','brep')]}
budget = {'Chapel': 60000, 'Villa': 30000, 'Pavilion': 25000, 'Basement': 30000}
for n, m in bld.items():
    s = simplify(m, budget[n]); scene.add_geometry(coloured(s, TEAL, n), node_name=n, geom_name=n); print(n, len(m.faces), '->', len(s.faces))
shift = {'Base plate 1 V2': (309, -244), 'Base plate 4 V2': (309, 269), 'Base plate 2 V2': (-350, -263), 'Base plate 3 V2': (-350, 164)}
for n, (dx, dy) in shift.items():
    m = trimesh.load(S + n + '.stl'); m.apply_translation([dx, dy, 0])
    print(n, np.round(m.bounds, 1).tolist())
    s = simplify(m, 12000); scene.add_geometry(coloured(s, WHITE, n), node_name=n, geom_name=n)
# Rhino is Z-up in millimetres; glTF is Y-up in metres. Rotate, scale, and sit it on the ground, centred.
scene.apply_transform(trimesh.transformations.rotation_matrix(-np.pi / 2, [1, 0, 0]))
scene.apply_scale(0.001)
b = scene.bounds; scene.apply_translation([-(b[0][0] + b[1][0]) / 2, -b[0][1], -(b[0][2] + b[1][2]) / 2])
print('final bounds (m)', np.round(scene.bounds, 3).tolist())
scene.export('domus-raw.glb'); import os; print('glb', os.path.getsize('domus-raw.glb') // 1024, 'KB')
