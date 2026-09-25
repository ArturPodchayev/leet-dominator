func braceExpansionII(expression string) []string {
	if expression == "" {
		return []string{}
	}
	idx := strings.Index(expression, "{")
	if idx == -1 {
		return prepareAns(strings.Split(expression, ","))
	}
	preStr := expression[:idx]
	expression = expression[idx:]
	braceStr, expression := getBraceString(expression)
	ans := braceExpansionII(braceStr)
	rs := []string{}
	if preStr != "" {
		idxPre := strings.LastIndex(preStr, ",")
		if idxPre != -1 {
			rs = strings.Split(preStr[:idxPre], ",")
			preStr = preStr[idxPre+1:]
		}
		if preStr != "" {
			for i := range ans {
				ans[i] = preStr + ans[i]
			}
		}
	}
	if expression == "" {
		rs = append(rs, ans...)
		return prepareAns(rs)
	}
	ans, expression = connect(ans, expression)
	rs = append(rs, ans...)
	if expression != "" {
		surArr := braceExpansionII(expression)
		rs = append(rs, surArr...)
	}
	return prepareAns(rs)
}
func getBraceString(expression string) (string, string) {
	braceStr := ""
	open := 1
	for i := 1; i < len(expression); i++ {
		if expression[i] == '{' {
			open++
		}
		if expression[i] == '}' {
			open--
		}
		if open == 0 {
			braceStr = expression[1:i]
			expression = expression[i+1:]
			break
		}
	}
	return braceStr, expression
}
func prepareAns(rs []string) []string {
	sort.Slice(rs, func(i, j int) bool {
		return rs[i] < rs[j]
	})
	ans := []string{rs[0]}
	for i := 1; i < len(rs); i++ {
		if rs[i] != rs[i-1] {
			ans = append(ans, rs[i])
		}
	}
	return ans
}
func connect(ans []string, expression string) ([]string, string) {
	if len(expression) == 0 {
		return ans, ""
	}
	if expression[0] == ',' {
		return ans, expression[1:]
	}
	if expression[0] == '{' {
		braceStr, expression := getBraceString(expression)
		cnArr := braceExpansionII(braceStr)
		rs := []string{}
		for _, a1 := range ans {
			for _, a2 := range cnArr {
				rs = append(rs, a1+a2)
			}
		}
		return connect(rs, expression)
	}
	idxCommar := strings.Index(expression, ",")
	idxBr := strings.Index(expression, "{")
	if idxCommar == -1 && idxBr == -1 {
		for i := range ans {
			ans[i] += expression
		}
		return ans, ""
	}
	sur := ""
	if idxCommar == -1 {
		sur = expression[:idxBr]
		expression = expression[idxBr:]
	} else if idxBr == -1 {
		sur = expression[:idxCommar]
		expression = expression[idxCommar:]
	} else {
		sur = expression[:min(idxCommar, idxBr)]
		expression = expression[min(idxCommar, idxBr):]
	}
	for i := range ans {
		ans[i] += sur
	}
	if expression != "" {
		return connect(ans, expression)
	}
	return ans, ""
}
