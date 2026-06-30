func numberOfSubstrings(s string) int {
    char := make([]int,3)
    var pt1,pt2 int
    var result int

    for pt2 < len(s) {
        index := s[pt2] - 'a'
        char[index]++

        for char[0] > 0 && char[1] > 0 && char[2] > 0 && pt1 <= pt2{
            result += len(s) - pt2
            char[s[pt1]-'a']--
            pt1 ++
        }

        pt2++
    }

    return result
}

