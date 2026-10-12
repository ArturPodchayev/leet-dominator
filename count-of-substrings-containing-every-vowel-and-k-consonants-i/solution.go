func countOfSubstrings(word string, k int) int {
    count:=0
    n:=len(word)
    for i:=0;i<n;i++{
        consonantCount:=0
        vowelCount := map[byte]int{}
        for j:=i; j < n; j++{
            if word[j] == 'a' || word[j] == 'e' || word[j] == 'i' || word[j] == 'o' || word[j] == 'u' {
                vowelCount[word[j]]++
            } else {
                consonantCount++
            }
            if len(vowelCount) == 5 && consonantCount == k {
                count++
            }
        }
    }
    return count
}
