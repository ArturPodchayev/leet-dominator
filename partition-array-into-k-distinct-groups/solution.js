let partitionArray = function (nums, k) {
    if (nums.length % k) return false;

    const countGroups = nums.length / k, freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const count of freq.values()) {
        if (count > countGroups) return false;
    }

    return true;
}
