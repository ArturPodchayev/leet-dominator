func makeStringGood(s string) int {
	var cnt [26]int
	n := len(s)
	mx := 0
	for i := 0; i < n; i++ {
		idx := int(s[i] - 'a')
		cnt[idx]++
		if cnt[idx] > mx {
			mx = cnt[idx]
		}
	}

	result := n
	const INF = 1_000_000_000

	for f := 1; f <= mx; f++ {
		dp0, dp1, dp2 := 0, INF, INF

		for i := 0; i < 26; i++ {
			prevMin := min(dp0, min(dp1, dp2))
			nextDp0, nextDp1, nextDp2 := INF, INF, INF

			if cnt[i] == 0 {
				nextDp0 = prevMin
			} else if cnt[i] >= f {
				excess := cnt[i] - f
				nextDp0 = prevMin + excess
				nextDp1 = prevMin + excess
				nextDp2 = prevMin + cnt[i]
			} else {
				need := f - cnt[i]
				c1 := 0
				if i > 0 && cnt[i-1] >= f {
					c1 = cnt[i-1] - f
				}
				c2 := 0
				if i > 0 {
					c2 = cnt[i-1]
				}

				op0 := dp0 + need
				op1 := INF
				if dp1 < INF {
					op1 = dp1 + max(0, need-c1)
				}
				op2 := INF
				if dp2 < INF {
					op2 = dp2 + max(0, need-c2)
				}

				nextDp0 = min(op0, min(op1, op2))
				nextDp2 = prevMin + cnt[i]
			}

			dp0, dp1, dp2 = nextDp0, nextDp1, nextDp2
		}

		result = min(result, min(dp0, min(dp1, dp2)))
	}

	return result
}
