func lexGreaterPermutation(s string, target string) string {
    sourceCount := make([]int, 26)

    for _,c := range s {
        sourceCount[int(c - 'a')]++
    }

    sourceDiff := make([]int, 26)
    for i := range sourceDiff {
        sourceDiff[i] = sourceCount[i]
    }

    pivotIndex := -1
    for i,c := range target {
        key := int(c - 'a')

        for j := key + 1; j <= 25; j++ {
            if sourceDiff[j] > 0 { // if one valid "greater" character exists, we can use that to pivot at this index
                pivotIndex = i
                break
            }
        }


        if sourceDiff[key] == 0 { // if no character matching this one remains, we can't check future pivot indexes
            break
        } else { // otherwise we decrement the remaining count of this key and continue checking future indexes
            sourceDiff[key]--
        }
    }

    if pivotIndex == -1 { // no valid pivot index so cannot build a greater string
        return ""
    }
    
    res := make([]rune, len(s))
    ascIndex := 0

    for i,c := range target {
        key := int(c - 'a')
        if i < pivotIndex { // build using matching characters up to the pivot
            res[i] = c
            sourceCount[key]--
        } else if i == pivotIndex { // at the pivot use the first higher letter
            for j := key+1; j < 26; j++ {
                if sourceCount[j] != 0 {
                    res[i] = rune('a' + j)
                    sourceCount[j]--
                    break
                }
            }
        } else { // after the pivot use the characters in ascending order
            for sourceCount[ascIndex] == 0 { ascIndex++ }

            res[i] = rune('a' + ascIndex)
            sourceCount[ascIndex]--
        }
    }

    return string(res)
}
