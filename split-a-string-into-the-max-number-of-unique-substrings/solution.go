func maxUniqueSplit(s string) int {
    res := 0
    backtrack(s, make(map[string]struct{}), 0, 0, &res)
    return res
}

func backtrack(s string, seen map[string]struct{}, pointer int, counter int, max *int) {
    if (counter+(len(s)-pointer)) <= *max {
        return
    }

    if counter > *max {
        *max = counter
    }
    
    for i:=pointer+1; i<=len(s); i++ {
        if _, ok := seen[s[pointer:i]]; !ok {
            seen[s[pointer:i]] = struct{}{}
            backtrack(s, seen, i, counter+1, max)
            delete(seen, s[pointer:i])
        }
    }
}
