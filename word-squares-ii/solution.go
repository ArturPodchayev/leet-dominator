func wordSquares(words []string) [][]string {
    sort.Strings(words)
    out := [][]string{}
    n := len(words)
    seen := make([]bool, n)

    var back func(sofar []string)
    back = func(sofar []string) {
        if len(sofar) == 4 {
            copied := make([]string, 4)
            copy(copied, sofar)
            out = append(out, copied)
            return
        }

        for i := range n {
            if seen[i] {
                continue
            }   
            word := words[i]

            if len(sofar) == 0 ||
            len(sofar) == 1 && word[0] == sofar[0][0] ||
            len(sofar) == 2 && word[0] == sofar[0][3] ||
            len(sofar) == 3 && word[0] == sofar[1][3] && word[3] == sofar[2][3] {
                seen[i] = true
                sofar  = append(sofar, word)
                back(sofar)
                sofar = sofar[:len(sofar)-1]
                seen[i] = false
            }
        }
    }

    back([]string{})

    return out
}
