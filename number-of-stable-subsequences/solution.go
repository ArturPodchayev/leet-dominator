package main

func countStableSubsequences (nums []int) int {
    const MOD = 1000000007
    var dp1_0, dp2_0, dp1_1, dp2_1 int64

    for _, v := range nums {
        p := v & 1
        ndp1_0, ndp2_0, ndp1_1, ndp2_1 := dp1_0, dp2_0, dp1_1, dp2_1

        if p == 0 {
            ndp1_0 = (ndp1_0 + 1) % MOD
            ndp1_0 = (ndp1_0 + dp1_1 + dp2_1) % MOD
            ndp2_0 = (ndp2_0 + dp1_0) % MOD
        } else {
            ndp1_1 = (ndp1_1 + 1) % MOD
            ndp1_1 = (ndp1_1 + dp1_0 + dp2_0) % MOD
            ndp2_1 = (ndp2_1 + dp1_1) % MOD
        }

        dp1_0, dp2_0, dp1_1, dp2_1 = ndp1_0, ndp2_0, ndp1_1, ndp2_1
    }

    ans := (dp1_0 + dp2_0 + dp1_1 + dp2_1) % MOD
    return int(ans)
}
