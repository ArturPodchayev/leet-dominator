type op int
type scope map[string]int

const (
	let op = iota
	add
	mult
)

var vars = []scope{}

func getVal(s string) int {
	if s[0] >= '0' && s[0] <= '9' || s[0] == '-' {
		num, _ := strconv.Atoi(s)
		return num
	}

	for i := len(vars) - 1; i >= 0; i-- {
		if v, ok := vars[i][s]; ok {
			return v
		}
	}

	return 0
}

func getOperand(s string) (int, string) {
	var pos int
	if s[0] != '(' {
		pos = strings.IndexByte(s, ' ')
		if pos == -1 {
			return getVal(s), ""
		}
		return getVal(s[:pos]), s[pos+1:]
	}

	var pars int
	for pos = range s {
		switch s[pos] {
		case '(':
			pars++
		case ')':
			pars--
		}
		if pars == 0 {
			break
		}
	}

	if pos == len(s)-1 {
		return evaluate(s), ""
	}

	num := evaluate(s[:pos+1])
	return num, s[pos+2:]
}

func parseLet(s string) int {
	var pos int
	var name string
	var vals string
	var first bool

	local := scope{}
	vars = append(vars, local)

	for {
		if first {
			if s[0] == '(' {
				break
			}
		}
		pos = strings.IndexByte(s, ' ')
		if pos == -1 {
			break
		}
		name = s[:pos]
		s = s[pos+1:]

		if s[0] == '(' {
			num, s2 := getOperand(s)
			s = s2
			local[name] = num
		} else {
			pos = strings.IndexByte(s, ' ')
			vals = s[:pos]
			local[name] = getVal(vals)
			s = s[pos+1:]
		}
		first = true
	}

	num, _ := getOperand(s)
	vars = vars[:len(vars)-1]
	return num
}

func calc(o op, op1, op2 int) int {
	switch o {
	case add:
		return op1 + op2
	case mult:
		return op1 * op2
	}
	return 0
}

func evaluate(exp string) int {
	exp = exp[1 : len(exp)-1]
	var op op

	switch {
	case strings.HasPrefix(exp, "let"):
		op = let
		return parseLet(exp[4:])
	case strings.HasPrefix(exp, "add"):
		op = add
		exp = exp[4:]
	case strings.HasPrefix(exp, "mult"):
		op = mult
		exp = exp[5:]
	}

	op1, exp := getOperand(exp)
	op2, _ := getOperand(exp)

	return calc(op, op1, op2)
}
