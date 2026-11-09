func reportSpam(message []string, bannedWords []string) bool {
	bannedWordsMapper := make(map[string]struct{})
	m := len(message)
	n := len(bannedWords)

	for i := 0; i < n; i++ {
		bannedWordsMapper[bannedWords[i]] = struct{}{}
	}

	var totalBannedWord int
	for i := 0; i < m; i++ {
		msg := message[i]
		if _, ok := bannedWordsMapper[msg]; ok {
			totalBannedWord++
			if totalBannedWord == 2 {
				return true
			}
		}
	}

	return false
}
