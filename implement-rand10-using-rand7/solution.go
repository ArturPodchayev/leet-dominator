func totalWaviness(num1 int, num2 int) (res int) {
    for num1 <= num2 {
        for n := num1; n > 99; n /= 10 {
            if n%10 < n%100/10 && n%100/10 > n%1000/100 || n%10 > n%100/10 && n%100/10 < n%1000/100 {
                res++
            }
        }
        num1++
    }
    return
}
