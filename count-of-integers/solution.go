var (
    modFactor = int(math.Pow(10, 9)) + 7
    maxDigits = 22
)

type ResultKey struct {
    Num string
    minSum int
    maxSum int
    ninesOnly bool
}

var (
    results = map[ResultKey]int{}
)

func count(num1 string, num2 string, min_sum int, max_sum int) int {

    if num1 == "" || num2 == "" {
        return 0
    }
    countHigh := countBase(num2, min_sum, max_sum, false)

    num1Int, err := strconv.ParseInt(num1, 10, 64)
    var num1Str string
    if err != nil {
        bytes := toMaxDigitBytes(num1)
        num1Str = minusOneStr(bytes)
    } else {
        num1Str = strconv.Itoa(int(num1Int-1))
    }
    countLow := countBase(num1Str, min_sum, max_sum, false)

    final := (countHigh - countLow) % modFactor
    if final < 0 {
        return final + modFactor
    }
    return final
}

func toMaxDigitBytes(str string) []byte {
    bytes := make([]byte, maxDigits)
    paddedZeroes := maxDigits - len(str)

    for i := 0; i < len(str); i++ {

        if i < paddedZeroes {
            bytes[i] = '0'
        } else {
            bytes[i] = str[i - paddedZeroes]
        }
    }

    return bytes
}

func minusOneStr(bytes []byte) string {

    lastNonZeroIndex := len(bytes)-1
    for i := len(bytes) -1; i >=0; i-- {
        if bytes[i] > '0' {
            lastNonZeroIndex = i
            break
        }
    }
    bytes[lastNonZeroIndex]--

    for i := lastNonZeroIndex + 1; i < len(bytes); i++ {
        bytes[i] = 9 + '0'
    }
    return string(bytes)
}

func countBase(num string, min_sum int, max_sum int, nines_only bool) int {
    // base case
    if num == "" {
        if min_sum <= 0 && max_sum >= 0 {
            return 1
        } else {
            return 0
        }
    }
    if num[0] == '-' {
        return 0
    }

    // exit early conditions
    if max_sum < 0 {
        return 0
    }


    key := ResultKey{num, min_sum, max_sum, nines_only}
    result, ok := results[key]
    if ok {
        return result
    }
    digits := len(num)
    var total int
    firstDigit := int(num[0] - '0')
    remainingStr := num[1:len(num)]
    for i := firstDigit; i >= 0; i-- {
        intCount := countBase(remainingStr, min_sum - i, max_sum - i, nines_only)
        total += intCount

        if total >= modFactor {
            total = total % modFactor
        }
        if !nines_only {
            remainingStr = strings.Repeat("9", digits-1)
            nines_only = true
        }
    }
    result = total
    results[key] = result
    return total

}
