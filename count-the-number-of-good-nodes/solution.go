func countGoodNodes(edges [][]int) int {
    n := len(edges)+1
    adjList := make([][]int, n)
    for _, edge := range edges {
        adjList[edge[0]] = append(adjList[edge[0]], edge[1])
        adjList[edge[1]] = append(adjList[edge[1]], edge[0])
    }
    goodNodes := 0
    dfs(adjList, 0, -1, &goodNodes)
    return goodNodes
}

func dfs(adjList [][]int, node int, parent int, goodNodes *int) int {
    totalNodes, subtreeSize := 1, -1
    isGoodNode := true

    for _, toVisitNode := range adjList[node] {
        if toVisitNode == parent {
            continue
        }
        currentSubtreeSize := dfs(adjList, toVisitNode, node, goodNodes)

        if subtreeSize == -1 {
            subtreeSize = currentSubtreeSize
        }else if subtreeSize != currentSubtreeSize {
            isGoodNode = false
        }

        totalNodes += currentSubtreeSize
    }

    if isGoodNode {
        (*goodNodes)++
    }

    return totalNodes
}
