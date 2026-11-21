func findSubtreeSizes(parent []int, s string) []int {
    n := len(parent)
    nodes := make([]*Node, n)

    // step 1. build initial tree from `parent`
    for i := 0; i < n; i++ {
        nodes[i] = &Node{ID: i, Label: s[i]}
    }
    for i := 1; i < n; i++ {
        nodes[parent[i]].AddChild(nodes[i])
    }

    // step 2. dfs to find new parents
    newParents := make([]*Node, n)
    // label-indexed ancestor stack
    labelStack := make(map[byte][]*Node)

    var DFS func(*Node)
    DFS = func(node *Node) {
        ch := node.Label
        // if any ancestor with same label, pick the most recent (closest)
        if stack, ok := labelStack[ch]; ok && len(stack) > 0 {
            newParents[node.ID] = stack[len(stack)-1]
        }

        // push to label stack
        labelStack[ch] = append(labelStack[ch], node)

        for _, child := range node.Children {
            DFS(child)
        }

        // pop from label stack 
        labelStack[ch] = labelStack[ch][:len(labelStack[ch])-1]
    }

    DFS(nodes[0])

    // step 3. rebuild the tree with new parents
    newNodes := make([]*Node, n)
    for i := range n {
        newNodes[i] = &Node{ ID: i, Label: s[i] }
    }

    for i := 1; i < n; i++ {
        var n *Node
        if newParents[i] != nil {
            // reparent to the same-label ancestor
            n = newNodes[newParents[i].ID]
        } else {
            // keep original parent
            n = newNodes[parent[i]]
        }
        n.AddChild(newNodes[i])
    }

    // step 5. count subtree sizes
    answer := make([]int, n)

    var count func(*Node) int
    count = func(node *Node) int {
        size := 1
        for _, child := range node.Children {
            size += count(child)
        }
        answer[node.ID] = size
        return size
    }

    count(newNodes[0])
    
    return answer
}

type Node struct {
    ID int      // the node index
    Label byte  // the character from s[i]
    Parent *Node 
    Children []*Node
}

func (n *Node) AddChild(child *Node) {
    n.Children = append(n.Children, child)
    child.Parent = n
}
