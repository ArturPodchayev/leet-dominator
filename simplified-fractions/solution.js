const simplifiedFractions = n => {
    let decimalSet = new Set();
    let result = [];

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 2; j <= n; j++) {
            if (i != j && j > i) {
                if (!decimalSet.has(i / j)) {
                    decimalSet.add(i / j)
                    result.push(`${i}/${j}`)
                }
            }
        }
    }
	
	decimalSet.clear() //Used to improve space complexity
    return result
};
