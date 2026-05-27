func displayTable(orders [][]string) [][]string {
    freq := map[string]map[string]int{}
    menu := map[string]bool{}
    for _, or := range orders {
        if _, ok := freq[or[1]]; !ok {
            freq[or[1]] = make(map[string]int)
        }
        freq[or[1]][or[2]]++
        menu[or[2]] = true
    }
    res := []string{}
    for k :=range menu {
        res = append(res, k)
    }
    sort.Strings(res)
    res = append([]string{"Table"}, res...)
    rc := [][]string{res}
    for k, v := range freq {
        temp := []string{k}
        for _, name := range res[1:] {
            temp = append(temp, strconv.Itoa(v[name]))
        }
        rc = append(rc, temp)
    }
    sort.Slice(rc[1:], func(i, j int)bool{
        if len(rc[1:][i][0]) == len(rc[1:][j][0]) {
            return rc[1:][i][0] < rc[1:][j][0]
        }
        return len(rc[1:][i][0]) < len(rc[1:][j][0])
    })
    return rc
}
