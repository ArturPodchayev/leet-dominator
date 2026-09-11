func totalNumbers(digits []int) int {
    result := make(map[int]bool, 0)
    for i := 0; i < len(digits); i++ {
        for j := 0; j < len(digits); j++ {
            for k := 0; k < len(digits); k++ {
                if i != k && k != j && i!= j && digits[i] != 0 && digits[k] % 2 == 0 {
                    key := digits[i] * 100 + digits[j] * 10 + digits[k]
                    result[key] = true
                }
            }
        }
    }
    return len(result)
}
