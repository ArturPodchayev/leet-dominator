func checkAlmostEquivalent(word1 string, word2 string) bool {
    m1, m2 := make(map[rune]int), make(map[rune]int)
    calcFreq(word1, &m1)
    calcFreq(word2, &m2)
    
    return compare(m1, m2)
}

func calcFreq(word string, m *map[rune]int) {
    for _, r := range word {
        (*m)[r]++
    }
}

func compare(m1 map[rune]int, m2 map[rune]int) bool {
    for key, val := range m1 {
        v2, ok := m2[key]
        if !ok {
            if val > 3 {
                return false
            }
        } else {
            if val > v2 + 3 || val < v2 - 3 {
                return false
            }
        }
    }

    for key, val := range m2 {
        _, ok := m1[key]
        if !ok {
            if val > 3 {
                return false
            }
        }
    }

    return true
}

func absDiff(a, b int) int {
    if a > b {
        return a - b
    }

    return b - a
}
