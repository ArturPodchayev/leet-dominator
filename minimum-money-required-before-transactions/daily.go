func minimumPushes(word string) int {
    occ := make([]int, 26)
    for i := range word {
        l := int(word[i]-'a')
        occ[l]++
    }

    sort.Ints(occ)
    uniqueLetters := 0
    res := 0
    for i := len(occ)-1; i >= 0; i-- {
        if occ[i] == 0 {
            continue
        }

        uniqueLetters++
        res+= occ[i] * ceil(uniqueLetters,8)
    }

    return res
}

func ceil(x,y int) int {
    if x % y > 0 {
        return x / y + 1
    }
    return x / y 
}
