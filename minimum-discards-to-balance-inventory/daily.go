func missingInteger(nums []int) int {
	if len(nums) == 1 { // corner-case -> prefix sum is a[0] and it is in the array -> return a[0] + 1
		return nums[0] + 1
	}

	sum := nums[0] // running prefix sum

	i := 1

	for (i < len(nums)) && (nums[i] == nums[i-1]+1) {
		sum += nums[i]
		i++
	}

	if i < len(nums) {
		fmt.Printf("First element out of non-sequential prefix: a[%v] = %v \n", i, nums[i])
	} else {
		fmt.Printf("Sequential prefix went to the end of the array. \n")
	}

	fmt.Printf("Sequential prefix sum: %v \n", sum)

	// All values before are smaller than the prefix sum (we have no negative values)
	// So we can continue searching just forward.
	// todo: if we need to handle negative values, we should restart i from 0

	// todo: since nums[i] is just [1;50], we can use an array of 50 to track
	m := make(map[int]bool) // track (values >= sum) presence
	m[nums[0]] = true       // since the sequential prefix can be of length just 1, it will be equal to the prefixSum in this case!

	for i < len(nums) {
		if nums[i] >= sum { // we only care about values a[i] > prefixSum
			m[nums[i]] = true
		}

		i++
	}

	// for all values starting with sum and up, check whether they are not in the array
	v := sum

	for {
		if !m[v] {
			fmt.Printf("First value >= %v not preset in the array: %v \n", sum, v)

			return v
		}

		v++
	}

	panic("This must never happen!")
}

func test(arr []int, expectedResult int) { // nodes can be null
	fmt.Println()
	fmt.Println("====================")

	fmt.Printf("Array: %v \n", arr)

	result := missingInteger(arr)

	fmt.Printf("First missing integer greater than the longest sequential prefix sum: %v \n", result)
	fmt.Printf("Expected result: %v \n", expectedResult)

	if result != expectedResult {
		fmt.Printf("FAILURE: expected result = %v, actual result = %v \n", expectedResult, result)
	}
}

func test1() {
	arr := []int{1, 2, 3, 2, 5}
	expected := 6 // 1 + 2 + 3 == 6 -> 6 not present in the array -> return 6

	test(arr, expected)
}

func test2() {
	arr := []int{3, 4, 5, 1, 12, 14, 13}
	expected := 15 // 3 + 4 + 5 == 12 -> 12, 13, 14 present in the array -> return 15

	test(arr, expected)
}

func test3() {
	arr := []int{1}
	expected := 2 // 1 = 1 -> 1 present in the array -> return 2

	test(arr, expected)
}

func test4() {
	arr := []int{1, 10, 20, 30}
	expected := 2 // 1 = 1 -> 1 present in the array -> return 2

	test(arr, expected)
}

func test5() {
	arr := []int{1, 2, 3}
	expected := 6 // 1 + 2 + 3 = 6 -> 6 not present in the array -> return 6

	test(arr, expected)
}

func main() {
	// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
	test1()
	test2()
	test3()
	test4()
	test5()
}
