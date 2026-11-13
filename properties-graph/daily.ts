function countNonDecreasingSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    let right = n - 1;
    let total_cost = 0;
    let res = 0;

    const q: [number, number][] = new Array(2 * n + 1);
    let head = n;
    let tail = n;

    for (let left = n - 1; left >= 0; left--) {
        const x = nums[left];
        let c = 1;

        while (head < tail && q[head][0] < x) {
            const [value, count] = q[head++];

            total_cost += (x - value) * count;
            c += count;
        }

        q[--head] = [x, c];

        while (total_cost > k) {
            const [value, count] = q[--tail];

            total_cost -= value - nums[right];
            right--;

            if (count > 1) {
                q[tail++] = [value, count - 1];
            }
        }

        res += right - left + 1;
    }

    return res;
};
