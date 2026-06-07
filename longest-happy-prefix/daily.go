func createBinaryTree(descriptions [][]int) *TreeNode {
    nodes := make(map[int]*TreeNode)   // value -> node pointer
    children := make(map[int]bool)     // value -> is a child

    for _, desc := range descriptions {
        parentVal, childVal, isLeft := desc[0], desc[1], desc[2]

        // create parent if not exists
        if _, ok := nodes[parentVal]; !ok {
            nodes[parentVal] = &TreeNode{Val: parentVal}
        }
        // create child if not exists
        if _, ok := nodes[childVal]; !ok {
            nodes[childVal] = &TreeNode{Val: childVal}
        }

        // mark as child
        children[childVal] = true

        // attach to left or right
        if isLeft == 1 {
            nodes[parentVal].Left = nodes[childVal]
        } else {
            nodes[parentVal].Right = nodes[childVal]
        }
    }

    // find root — the node that is never a child
    for val, node := range nodes {
        if !children[val] {
            return node
        }
    }

    return nil
}
