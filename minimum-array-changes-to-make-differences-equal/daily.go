func canAliceWin(n int) bool {
    current := 10
    canOrNot := true

    for n > 0 {
        if current > n {
            break
        }

        n -= current
        current--
        canOrNot =! canOrNot
    } 

    return !canOrNot
}
