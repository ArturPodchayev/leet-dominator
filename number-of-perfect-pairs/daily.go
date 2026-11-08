func countServers(grid [][]int) int {
   r, c:= make([]int, len(grid)), make([]int, len(grid[0])) 
   ans := 0
   for i,row := range grid {
    for j,cell := range row {
        if cell == 1 {
            ans++
            r[i]++
            c[j]++
        }
    }
   }
   for i,row := range grid {
    for j,cell := range row {
        if cell == 1 && r[i] == 1 && c[j] == 1{
            ans--
        }
    }
   }
   return ans
}
