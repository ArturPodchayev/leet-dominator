var sequentialDigits = function (low, high) {
    const sequentialNums = [];
    const digits = "123456789";

    for (let length = 1; length <= 9; length++) {
        for (let start = 0; start + length <= 9; start++) {
            sequentialNums.push(Number(digits.substring(start, start + length)));
        }
    }

    return sequentialNums.filter(n => n >= low && n <= high);
};
