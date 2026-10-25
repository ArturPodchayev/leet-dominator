func colorGrid(n int, m int, s [][]int) [][]int {
    g := make([][]int, n)
    for k := range g { g[k] = make([]int, m) }
    d := []int{0, 1, 0, -1, 0}
    for len(s) > 0 { // do bfs
        ns := [][]int{}
        wc := map[[2]int]int{} // unique next coords and colors
        for k := range s {
            g[s[k][0]][s[k][1]] = s[k][2] // fill grid
        }
        for k := range s { // iterate over current coords/colors, get next one
            for i := 0; i <= 3; i++ {
                dy, dx := s[k][0] + d[i], s[k][1] + d[i+1]
                if dy >= 0 && dy < n && dx >= 0 && dx < m && g[dy][dx] == 0 {
                    wc[[2]int{dy, dx}] = max(wc[[2]int{dy, dx}], s[k][2]) // maximise color
                }
            }
        }
        if len(wc) > 0 {
            for k := range wc {
                ns = append(ns, []int{k[0], k[1], wc[k]}) // append next coords/colors
            }
        } else {
            break
        }
        s = ns
    }
    return g
}

