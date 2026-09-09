func shiftDistance(s string, t string, nextCost []int, previousCost []int) int64 {
    memo := make(map[[2]byte]int) // short distance between 2 characters s[i] and t[i], e.x. ('a', 'b') = 2
    sum := int64(0)
    costsLength := len(nextCost)
    for i := 0; i < len(s); i++ {
        sch := s[i]
        tch := t[i]
        
        if dist, ok := memo[[2]byte{sch, tch}]; ok {
            sum += int64(dist)
            continue
        }
        
        distForNext := 0
        sCharIndex := int(sch-'a')
        tCharIndex := int(tch-'a')
        for j := sCharIndex; j != tCharIndex; j = (j+1)%costsLength {
            distForNext += nextCost[j]
        }
        
        distForPrevious := 0
        for j := sCharIndex; j != tCharIndex; j = (j-1+costsLength)%costsLength {
            distForPrevious += previousCost[j]
        }
        
        minDist := distForNext
        if distForNext > distForPrevious {
            minDist = distForPrevious
        }
        sum += int64(minDist)
        memo[[2]byte{sch, tch}] = minDist
    }
    return sum
}
