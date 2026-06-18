func simplifiedFractions(n int) []string {
    out := []string{}
    for denom := 2; denom <= n; denom++ {
        for numer := 1; numer < denom; numer++ {
            if gcd(numer, denom) == 1 {
                out = append(out, strconv.Itoa(numer) + "/" + strconv.Itoa(denom))
            }
        }
    }
    return out
}

func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a % b
    }
    return a
}
