func maxNumberOfBalloons(text string) int {
    res := make([]int, 5)
    for _,v := range []rune(text) {
        switch v {
            case 'b':
                res[0]++
            case 'a':
                res[1]++
            case 'l':
                res[2]++
            case 'o':
                res[3]++
            case 'n':
                res[4]++
        }
    }
    res[2] /= 2
    res[3] /= 2
    return slices.Min(res)
}
