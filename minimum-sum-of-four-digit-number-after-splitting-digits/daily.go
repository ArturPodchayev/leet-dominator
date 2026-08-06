func smallestNumber(n int, t int) int {
	for x := n; ; x++ {
		num, product := x, 1

		for num > 0 {
			digit := num % 10

			if digit == 0 {
				return x
			}

			product *= digit
			num /= 10
		}

		if product%t == 0 {
			return x
		}
	}
}
