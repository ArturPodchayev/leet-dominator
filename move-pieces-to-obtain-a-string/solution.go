func canChange(start string, target string) bool {
	var stack []byte
	for i := 0; i < len(start); i++ {

		if target[i] == 'L' {
			if len(stack) > 0 && stack[len(stack)-1] == 'R' {
				return false
			}
			stack = append(stack, 'L')
		}
		if start[i] == 'R' {
			if len(stack) > 0 && stack[len(stack)-1] == 'L' {
				return false
			}
			stack = append(stack, 'R')
		}

		if target[i] == 'R' {
			if len(stack) == 0 || stack[len(stack)-1] != 'R' {
				return false
			}
			stack = stack[0 : len(stack)-1]
		}
		if start[i] == 'L' {
			if len(stack) == 0 || stack[len(stack)-1] != 'L' {
				return false
			}
			stack = stack[0 : len(stack)-1]
		}
	}

	return len(stack) == 0

}
