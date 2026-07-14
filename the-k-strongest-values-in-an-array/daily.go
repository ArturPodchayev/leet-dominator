func subsequencePairCount(n []int) int {    
    mod := 1000000007
    mem := map[[3]int]int{} // memoization

    var dfs func(i, l, r int) int // index, left gcp, right gcd
    dfs = func (i, l, r int) int {
        if i == len(n) { // last index check
            if l == r { return 1 } // if gcd left == gcd right, we have match
            return 0
        }
        if _, ok := mem[[3]int{i, l, r}]; ok { // check mem
            return mem[[3]int{i, l, r}]
        }
        res := 0                                            // total is sum of
        res = (res + dfs(i+1, l, r)) % mod                  // skip index
        res = (res + dfs(i+1, gcd(l, n[i]), r)) % mod       // add number from index to left  subset (we just need gcd of previous sequence and current number)
        res = (res + dfs(i+1, l, gcd(r, n[i]))) % mod       // add number from index to right subset (we just need gcd of previous sequence and current number)
        mem[[3]int{i, l, r}] = res // update mem
        return res
    }

    return dfs(0, 0, 0) - 1
}

func gcd(a, b int) int { // gcd helper
	for b != 0 {
		a, b = b, a % b
	}
	return a
}
