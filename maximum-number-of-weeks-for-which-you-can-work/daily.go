func lexPalindromicPermutation(s string, target string) string {
    n := len(s)
    
    // 1. Frequency counting and Palindrome Validation
    cnt := make([]int, 26)
    for i := 0; i < n; i++ {
        cnt[s[i]-'a']++
    }

    var oddChar byte
    oddCount := 0
    for i := 0; i < 26; i++ {
        if cnt[i]%2 != 0 {
            oddCount++
            oddChar = byte('a' + i)
        }
        cnt[i] /= 2 // Keep count for exactly half the palindrome
    }

    if oddCount > 1 {
        return "" // Cannot form a palindrome
    }

    ans := make([]byte, n)
    if oddCount == 1 {
        ans[n/2] = oddChar
    }

    isGreater := false

    // 2. Greedily construct the left half
    for i := 0; i < n/2; i++ {
        if isGreater {
            // Phase 2: Prefix is already greater. Pick the smallest possible character.
            for c := 0; c < 26; c++ {
                if cnt[c] > 0 {
                    ans[i] = byte('a' + c)
                    ans[n-1-i] = byte('a' + c)
                    cnt[c]--
                    break
                }
            }
        } else {
            // Phase 1: Prefix equals target. We can only pick characters >= target[i].
            found := false
            for c := int(target[i] - 'a'); c < 26; c++ {
                if cnt[c] == 0 {
                    continue
                }

                ans[i] = byte('a' + c)
                ans[n-1-i] = byte('a' + c)
                cnt[c]--

                if byte('a'+c) > target[i] {
                    isGreater = true
                    found = true
                    break
                }

                // Verify if a valid completion exists
                if canExceed(cnt, ans, i+1, target) {
                    found = true
                    break
                }

                // Backtrack if invalid
                cnt[c]++
            }

            if !found {
                return "" // Impossible to construct a valid string
            }
        }
    }

    // 3. Final validation for exact left-half matches
    if !isGreater {
        if string(ans) <= target {
            return ""
        }
    }

    return string(ans)
}

// canExceed simulates building the maximum possible palindrome with remaining characters
// to check if it can strictly exceed the target.
func canExceed(cnt []int, ans []byte, start int, target string) bool {
    n := len(ans)
    tempAns := make([]byte, n)
    copy(tempAns, ans)
    
    tempCnt := make([]int, 26)
    copy(tempCnt, cnt)

    // Fill remaining slots with the largest possible characters
    idx := start
    for c := 25; c >= 0; c-- {
        for tempCnt[c] > 0 {
            tempAns[idx] = byte('a' + c)
            tempAns[n-1-idx] = byte('a' + c)
            tempCnt[c]--
            idx++
        }
    }

    // Compare the max possible configuration to the target
    for i := 0; i < n; i++ {
        if tempAns[i] > target[i] {
            return true
        } else if tempAns[i] < target[i] {
            return false
        }
    }
    
    return false
}
