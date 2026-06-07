function createBinaryTree(descriptions: number[][]): TreeNode | null {
    // Map to store value -> TreeNode for O(1) instant lookup
    const map = new Map<number, TreeNode>();
    // Set to track all nodes that are children (have an in-degree of 1)
    const children = new Set<number>();

    // 1. Build the tree connections
    for (const [parent, child, isLeft] of descriptions) {
        // Create parent node if it doesn't exist
        if (!map.has(parent)) {
            map.set(parent, new TreeNode(parent));
        }

        // Create child node if it doesn't exist
        if (!map.has(child)) {
            map.set(child, new TreeNode(child));
        }

        // Retrieve the object references from the map
        const parentNode = map.get(parent)!;
        const childNode = map.get(child)!;

        // Link the child to the correct side of the parent
        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }

        // Mark this value as a child
        children.add(child);
    }

    // 2. Find the root node
    for (const [val, node] of map) {
        // The root is the ONLY node that is never anyone's child
        if (!children.has(val)) {
            return node;
        }
    }

    return null;
}
