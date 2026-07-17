func minimumNumbers(num int, k int) int {
    if num == 0 {
        return 0
    }
    
    if num & 1 != 0 && k & 1 == 0 {
        return -1
    }
    
    for i := 1; i <= num; i++ {
        if i * k <= num && i * k % 10 == num % 10 {
            return i
        } 
    }
    
    return -1    
}
