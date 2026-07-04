func isNumber(r byte) bool {
	return r >= 48 && r <= 57
}

func reformat(s string) string {
	if s == "" {
		return ""
	}
	bs := []byte(s)
	for i := 1; i <= len(bs)-1; i++ {
		// fmt.Printf("%v\n", string(bs))
		if isNumber(bs[i-1]) == isNumber(bs[i]) {
			gotReplacement := false
			for r := i + 1; r < len(bs); r++ {
				if isNumber(bs[i]) != isNumber(bs[r]) {
					bs[i], bs[r] = bs[r], bs[i]
					// fmt.Printf("%v %v | %v\n", string(bs[r]), string(bs[i]), string(bs))
					gotReplacement = true
					break
				}
			}
			if !gotReplacement {
				if i == len(bs)-1 && (isNumber(bs[0]) != isNumber(bs[len(bs)-1])) {
					return string(append(bs[len(bs)-1:], bs[:len(bs)-1]...))
				}
				return ""
			}
		}
	}
	return string(bs)
}
