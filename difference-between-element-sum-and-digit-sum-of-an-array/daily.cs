public class Solution {
    public bool UniformArray(int[] nums1)
    {
        var min = nums1[0];
        var hasOdd = false;

        foreach (var n in nums1)
        {
            min = Math.Min(min, n);
            if (!hasOdd && n % 2 != 0) hasOdd = true;
        }

        if (min % 2 != 0) return true;

        return !hasOdd;
    }
}
