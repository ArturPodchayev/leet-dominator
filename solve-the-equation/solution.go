func solveEquation(equation string) string {
    sides := strings.Split(equation, "=")
    left := process(sides[0])
    right := process(sides[1])
    xCount := left[0] - right[0]
    intSum := right[1] - left[1]

    if xCount < 0 {
        xCount, intSum = -xCount, -intSum
    }

    if xCount == 0 {
        if intSum == 0 {
            return "Infinite solutions"
        }
        return "No solution"
    }

    return "x=" + strconv.Itoa(intSum / xCount)
}

func process(side string) [2]int {
    side = strings.ReplaceAll(side, "-", "+-")
    values := strings.Split(side, "+")
    xCount, intSum := 0, 0

    for _, value := range values {
        if len(value) == 0 { continue }
        if value[len(value) - 1] == 'x' {
            if value == "x" {
                xCount++
            } else if value == "-x" {
                xCount--
            } else {
                coeff, _ := strconv.Atoi(value[:len(value) - 1])
                xCount += coeff
            }
        } else {
            num, _ := strconv.Atoi(value)
            intSum += num
        }
    }

    return [2]int{xCount, intSum}
}
