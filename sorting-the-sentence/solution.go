func sortSentence(s string) string {
    words := strings.Split(s, " ")
    result := make([]string, len(words))
    for _, word := range words {
        i := word[len(word) - 1]
        j, _ := strconv.Atoi(string(i))
        result[j-1] = word[:len(word)-1]
    }
    return strings.Join(result, " ")
}
