import (
    "fmt"
)

func bfsTraverse(n int, startPt int, redEdgeMap map[int][]int, blueEdgeMap map[int][]int) []int {
    // Make resulting array
    dists := make([]int, n)
    dists[0] = 0
    for i := 1; i < n; i++ {
        dists[i] = -1
    }

    // Format is currPt, distToCurrPt, colorCameFrom (0 is Red, 1 is Blue)
    queue := [][]int{{0, 0, 0}, {0, 0, 1}}
    visited := make(map[string]bool)
    for len(queue) > 0 {
        top := queue[0]
        queue = queue[1:]

        tuple := fmt.Sprintf("(%d, %d)", top[0], top[2])
        if _, exists := visited[tuple]; exists {
            continue
        } else {
            visited[tuple] = true
        }
        
        if top[2] == 1 {
            if redRes, exists := redEdgeMap[top[0]]; exists {
                for _, elm := range redRes {
                    queue = append(queue, []int{elm, top[1] + 1, 0})
                    if dists[elm] == -1 || top[1] + 1 < dists[elm] {
                        dists[elm] = top[1] + 1
                    }
                }
            }
        } else {
            if blueRes, exists := blueEdgeMap[top[0]]; exists {
                for _, elm := range blueRes {
                    queue = append(queue, []int{elm, top[1] + 1, 1})
                    if dists[elm] == -1 || top[1] + 1 < dists[elm] {
                        dists[elm] = top[1] + 1
                    }
                }
            }
        }
         
    }

    return dists
}

func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
    if n == 0 { return []int{} }

    // Represent 2D Edge Array as Map
    redEdgeMap := make(map[int][]int)
    for e := 0; e < len(redEdges); e++{
        redEdgeMap[redEdges[e][0]] = append(redEdgeMap[redEdges[e][0]], redEdges[e][1])
    }
    
    blueEdgeMap := make(map[int][]int)
    for e := 0; e < len(blueEdges); e++ {
        blueEdgeMap[blueEdges[e][0]] = append(blueEdgeMap[blueEdges[e][0]], blueEdges[e][1])
    }

    return bfsTraverse(n, 0, redEdgeMap, blueEdgeMap)
}
