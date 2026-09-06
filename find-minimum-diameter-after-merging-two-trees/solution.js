buildTree = edges => edges.reduce((
    tree,
    [a, b],
) => (
    (tree[a] ??= []).push(b),
    (tree[b] ??= []).push(a),
    tree
), [])

reduceTree = (
    tree,
    diameter = 0,
    depth = tree.map(() => 0),
    queue = MinPriorityQueue.from(tree
        .map((edges, index) => [index, edges.length > 1])
        .filter(([, priority]) => !priority)
    ),
    reduceNode = (
        { element } = queue.dequeue() ?? {},
        next = tree[element]?.[0],
    ) => next + 1 ? (
        tree[next] = tree[next].filter(index => index !== element),
        diameter = Math.max(diameter, depth[next] + depth[element] + 1),
        depth[next] = Math.max(depth[next], depth[element] + 1),
        tree[next].length == 1 && queue.enqueue(next, depth[next]),
        reduceNode()
    ) : diameter,
) => reduceNode()

minimumDiameterAfterMerge = (
    edges1,
    edges2,
    tree1 = buildTree(edges1),
    tree2 = buildTree(edges2),
    diameter1 = reduceTree(tree1),
    diameter2 = reduceTree(tree2),
) => Math.max(diameter1, diameter2, (diameter1+1>>1) (diameter2+1>>1) + 1)
