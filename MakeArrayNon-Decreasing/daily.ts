function maxSubarrayLength(nums: number[], k: number): number {
    let result = 0;
    const map = new Map<number, number>();

    let left = 0;
    
    // 1. Expand the window by moving the right pointer
    for (let right = 0; right < nums.length; right++) {
        // Add the current element to our frequency map
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        // 2. Shrink the window if the current element's frequency exceeds k
        while ((map.get(nums[right]) || 0) > k) {
            // Remove the leftmost element from our window tracking
            map.set(nums[left], (map.get(nums[left]) || 0) - 1);
            left++;
        }

        // 3. Update the maximum length of the valid window
        result = Math.max(result, right - left + 1);
    }

    return result;
}
