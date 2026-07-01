func maximumSafenessFactor(grid [][]int) int {
    dist := make([][]int, len(grid))
    for i := range dist {
        dist[i] = make([]int, len(grid[0]))
        for j := range dist[i] {
            dist[i][j] = -1
        }
    }
    stack := [][2]int{}
    for i:=0;i<len(grid);i++ {
        for j:=0;j<len(grid[0]);j++{
            if grid[i][j] == 1{
                stack = append(stack, [2]int{i,j})
                dist[i][j] = 0
            }
        }
    }

    maxDist := 0
    for len(stack) > 0 {
        cur := stack[0]
        stack = stack[1:]
        x, y := cur[0], cur[1]
        if maxDist < dist[x][y]{maxDist = dist[x][y]}
        left := [2]int{x, y - 1}
        right := [2]int{x, y + 1}
        up := [2]int{x - 1, y}
        down := [2]int{x + 1, y}
        if up[0] >= 0 && dist[up[0]][up[1]] == -1{
            dist[up[0]][up[1]] = dist[cur[0]][cur[1]] + 1
            stack = append(stack, up)
        }
        if down[0] < len(dist) && dist[down[0]][down[1]] == -1{
            dist[down[0]][down[1]] = dist[cur[0]][cur[1]] + 1
            stack = append(stack, down)
        }
        if right[1] < len(dist[0]) && dist[right[0]][right[1]] == -1{
            dist[right[0]][right[1]] = dist[cur[0]][cur[1]] + 1
            stack = append(stack, right)

        }
        if left[1] >= 0 && dist[left[0]][left[1]] == -1{
            dist[left[0]][left[1]] = dist[cur[0]][cur[1]] + 1
            stack = append(stack, left)
        }
    }

    s, e := 0, maxDist
    for s <= e {
        m := (s+e) / 2
        isPossible := false
        queue := [][2]int{{0,0}}
        visited := make([][]bool, len(grid))
        for i := range visited {
            visited[i] = make([]bool, len(grid[0]))
        }
        visited[0][0] = true
        for len(queue) > 0 && m <= dist[0][0] && m <= dist[len(dist)-1][len(dist[0]) - 1]{
            cur := queue[0]
            queue = queue[1:]
            x, y := cur[0], cur[1]
            if x == len(grid)-1 && y == len(grid[0])-1{
                isPossible = true
                break
            }
            left := [2]int{x, y - 1}
            right := [2]int{x, y + 1}
            up := [2]int{x - 1, y}
            down := [2]int{x + 1, y}
            if up[0] >= 0 && dist[up[0]][up[1]] >= m && visited[up[0]][up[1]] == false{
                queue = append(queue, up)
                visited[up[0]][up[1]] = true
            }
            if down[0] < len(dist) && dist[down[0]][down[1]] >= m && visited[down[0]][down[1]] == false{
                queue = append(queue, down)
                visited[down[0]][down[1]] = true
            }
            if right[1] < len(dist[0]) && dist[right[0]][right[1]] >= m && visited[right[0]][right[1]] == false{
                queue = append(queue, right)
                visited[right[0]][right[1]] = true

            }
            if left[1] >= 0 && dist[left[0]][left[1]] >=m && visited[left[0]][left[1]] == false{
                queue = append(queue, left)
                visited[left[0]][left[1]] = true
            }
        }

        if isPossible == true{
            s = m + 1
        } else{
            e = m  - 1
        }
    }

    return e
}
