var findLonely = function (nums) {
    nums.sort(function (a, b) { return a - b })
    neww = []
    for (i = 0; i < nums.length; i++) {
        pre = nums[i] - 1
        post = nums[i] + 1
        if (((nums[i - 1] != pre && nums[i - 1] != nums[i]) || nums[i - 1] == undefined) && ((nums[i + 1] != post && nums[i + 1] != nums[i]) || nums[i + 1] == undefined))
            neww.push(nums[i])
    }
    return neww
};
