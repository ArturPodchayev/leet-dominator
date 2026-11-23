// upper bound gives next greater element in sorted arr

var countElements = function (nums, k) {
	let n = nums.length;
	if (k === 0) return n;

	nums.sort((nums, b) => nums - b);

	let total = 0;
	for (let i = 0; i < n; i++) {
		let j = upperBound(nums, nums[i]);
		if (j === n) continue; // not found

		let dist = n - j;
		if (dist >= k) {
			total++;
		}
	}

	return total;
};

const upperBound = (arr, target) => {
	let left = 0,
		right = arr.length;
	while (left < right) {
		const mid = (left + right) >> 1;
		arr[mid] <= target ? (left = mid + 1) : (right = mid);
	}
	return left;
};
