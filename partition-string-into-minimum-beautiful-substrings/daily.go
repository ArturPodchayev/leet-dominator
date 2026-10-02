func generateParenthesis(n int) []string {
	result := make([]string, 0)

	var dfs func(leftCount, rightCount int, s string, n int)

	dfs = func(leftCount, rightCount int, s string, n int) {
		if leftCount > n || rightCount > n || leftCount < rightCount {
			return
		}

		if leftCount == n && rightCount == n {
			result = append(result, s)
			return
		}

		dfs(leftCount+1, rightCount, s+"(", n)

		dfs(leftCount, rightCount+1, s+")", n)
	}

	dfs(0, 0, "", n)

	return result
}
