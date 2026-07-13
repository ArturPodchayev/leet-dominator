func sequentialDigits(low int, high int) []int {
    var tempInt int
    var lowNDigits int
    var highNDigits int
    var seqDigitNums []int
    var res []int
    
    // Determine number of digits to generate seqDigits for
    tempInt = low
    for tempInt > 0 {
        tempInt = tempInt / 10
        lowNDigits++
    }
    tempInt = high
    for tempInt > 0 {
        tempInt = tempInt / 10
        highNDigits++
    }
    var nDigitsToUse []int
    if lowNDigits != highNDigits {
        for i := lowNDigits; i<= highNDigits; i++ {
            nDigitsToUse = append(nDigitsToUse, i)
        }
    }else{
        nDigitsToUse = []int{lowNDigits}
    }

    // Generate seq numbers per nDigits
    for _, nDigits := range nDigitsToUse {
        genNumsForNDigits:
        for startDigit:=1; startDigit<=9; startDigit++ {
            newNum := 0
            for j:=0; j<nDigits; j++ {
                if startDigit + j >= 10 {
                    break genNumsForNDigits
                }
                newNum = newNum * 10 + (startDigit+j)
            }
            seqDigitNums = append(seqDigitNums, newNum)
        }
    }

    // collect digits within range
    for _, seqNum := range seqDigitNums {
        if seqNum >= low && seqNum <= high {
            res = append(res, seqNum)
        }
    }
    return res
}
