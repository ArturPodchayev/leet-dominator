func longestPrefix(s string) string {
	endPrfx, startSfx := len(s)-2, 1 // end/start of potential longest prefix & suffix

	for endPrfx >= 0 {
		if s[:endPrfx+1] == s[startSfx:] {
			return s[:endPrfx+1]
		}
		endPrfx--
		startSfx++

	}
	return ""
}
