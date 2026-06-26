public class Solution {
    public long CountMajoritySubarrays(int[] nums, int target) {
        int n = nums.Length;

        Fenwick bit = new Fenwick(2 * n + 3);

        int prefix = n + 1;
        bit.Update(prefix, 1);

        long ans = 0;

        foreach (int x in nums) {
            prefix += (x == target) ? 1 : -1;

           
            ans += bit.Query(prefix - 1);

            bit.Update(prefix, 1);
        }

        return ans;
    }
}

public class Fenwick {
    private int[] tree;
    private int n;

    public Fenwick(int size) {
        n = size;
        tree = new int[n + 1];
    }

    public void Update(int index, int value) {
        while (index <= n) {
            tree[index] += value;
            index += index & -index;
        }
    }

    public int Query(int index) {
        int sum = 0;

        while (index > 0) {
            sum += tree[index];
            index -= index & -index;
        }

        return sum;
    }
}
