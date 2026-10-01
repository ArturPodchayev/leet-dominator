func isClosing(c byte) (_ bool) {
	return ')' == c || ']' == c || '}' == c
}

func isOpening(c byte) (_ bool) {
	return '(' == c || '[' == c || '{' == c
}

func matching(c byte) (_ byte) {
	switch c {
	case ')':
		return '('
	case ']':
		return '['
	case '}':
		return '{'
	}
	return
}

const empty = -1

func isValid(str string) (_ bool) {
	stack := make([]byte, 0, len(str))
	iStack := empty
	var c byte
	var i int
	for i = len(str) - 1; i >= 0; i-- {
		if c = str[i]; isClosing(c) {
			stack = append(stack, c)
			iStack++
		} else if isOpening(c) {
			if iStack < 0 || c != matching(stack[iStack]) {
				return
			}
			stack = stack[:iStack]
			iStack--
		}
	}
	return empty == iStack
}
