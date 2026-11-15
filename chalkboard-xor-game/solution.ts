function xorGame(nums: number[]): boolean {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    return xor === 0 || nums.length % 2 === 0;
}
