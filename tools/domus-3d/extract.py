import rhino3dm, trimesh, numpy as np, pickle, collections
m = rhino3dm.File3dm.Read("/mnt/user-data/uploads/Spatial/EXE4/EXE CABIN BASE PLATE SPLIT V2.3dm")
layers = {i: l.FullPath for i, l in enumerate(m.Layers)}
def tm(rm):
    v = np.array([[p.X, p.Y, p.Z] for p in rm.Vertices], dtype=np.float64)
    f = []
    for i in range(len(rm.Faces)):
        a = rm.Faces[i]
        if a[2] == a[3]: f.append([a[0], a[1], a[2]])
        else: f += [[a[0], a[1], a[2]], [a[0], a[2], a[3]]]
    return trimesh.Trimesh(v, np.array(f), process=False)
parts = collections.defaultdict(list)
for o in m.Objects:
    g = o.Geometry; lay = layers.get(o.Attributes.LayerIndex)
    if lay in ('Default', 'CONNECTOR_BACKUP_ORIGINALS_V2', 'massings'): continue
    if isinstance(g, rhino3dm.Brep):
        for fc in g.Faces:
            rm = fc.GetMesh(rhino3dm.MeshType.Any)
            if rm is not None and len(rm.Faces): parts[(lay, 'brep')].append(tm(rm))
    elif isinstance(g, rhino3dm.Mesh):
        parts[(lay, 'mesh%d' % len(parts[(lay,'meshes')]))].append(tm(g)); parts[(lay,'meshes')].append(None)
out = {}
for k, ms in parts.items():
    ms = [x for x in ms if x is not None]
    if not ms: continue
    c = trimesh.util.concatenate(ms)
    out[k] = c
    print(k, len(c.faces), 'faces  bounds', np.round(c.bounds, 1).tolist())
pickle.dump(out, open('parts.pkl', 'wb'))
