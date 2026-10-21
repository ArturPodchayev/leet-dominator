func minOperations(s string) int {
    l, nl, r, nr := s[0], 1, s[0], 1 // min character, max character, number of min characters, number of max characters
    for i := 1; i < len(s); i++ {
        if l > s[i] { l = s[i]; nl = 1 } else if l == s[i] { nl ++ }
        if r < s[i] { r = s[i]; nl = 1 } else if r == s[i] { nr ++ }
    }
    b := []byte(s)
    sort.Slice(b, func(i, j int) bool { return b[i] < b[j] })
    if string(b) == s { return 0 } // if sorted string == initial string, return 0
    if s[0] == l || s[len(s)-1] == r { return 1 } // example: oaklkjz -> [ajkkl]z (1 sorting)
    if len(s) == 2 { return -1 } // example: ba -> can sort only full string, which we can not
    if s[0] == r && s[len(s)-1] == l && nl == 1 && nr == 1 { return 3 } // example: zsdfa -> z[adfs] -> [adfz]s -> adf[sz] // 3 sortings
    return 2 // example: zszdfa -> z[adfsz] -> [adfsz]z // 2 sortings
}
