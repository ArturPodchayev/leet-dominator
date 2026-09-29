func hasValidPath(grid [][]byte) bool {
    var visited [100][100][101]bool
    return checkValidPath(grid, &visited, 0, 0, 0)
}

func checkValidPath(grid [][]byte, visited *[100][100][101]bool, b, r, c int) bool {
    if r < len(grid) && c < len(grid[0]) {  
        if grid[r][c] == '(' {
            b += 1
        }  else {
            b -= 1 
        }

        if b < 0 || b > (len(grid)+len(grid[0]))/2 || (*visited)[r][c][b] {
            return false
        }
        
        if r == len(grid)-1 && c == len(grid[0])-1 && b == 0 {
            return true
        }

        if checkValidPath(grid, visited, b, r+1, c) || checkValidPath(grid, visited, b, r, c+1) {
            return true
        }
        
        (*visited)[r][c][b] = true
    }
    return false
}
