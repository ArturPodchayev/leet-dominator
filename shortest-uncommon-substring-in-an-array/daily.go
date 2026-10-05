func scoreOfParentheses(s string) int {
	stack:=[]int{0}
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			stack = append(stack, 0)
		} else {
	
			v := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if v == 0 {
	
				stack[len(stack)-1] += 1
			} else {
		
				stack[len(stack)-1] += 2 * v
			}
		}
	}
	return stack[0]
}
