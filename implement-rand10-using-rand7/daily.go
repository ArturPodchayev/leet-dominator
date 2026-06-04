func rand10() int {
	num := 40
	for ; num >= 40; num = (rand7()-1)*7 + rand7() - 1 {}
	return num%10 + 1
}
