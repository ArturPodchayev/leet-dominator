var maximumTotalSum = function (maximumHeights) {
	maximumHeights.sort((a, b) => b - a);
	const set = new Set();
	let prevMinTaken = maximumHeights[0];
	let sum = 0;
	let i = -1;
	for (let curr of maximumHeights) {
		i++;
		if (curr === maximumHeights[i - 1]) {
			curr = prevMinTaken;
		}
		while (curr >= 1 && set.has(curr)) {
			curr--;
		}
		if (curr >= 1) {
			set.add(curr);
			sum += curr;
		} else {
			return -1;
		}
		prevMinTaken = curr;
	}
	return sum;
};
