public class Solution {
    public int MaximumElementAfterDecrementingAndRearranging(int[] arr) {
        Array.Sort(arr);
        int pre = 0;
        foreach(int cur in arr)
        {
            pre = Math.Min(pre+1, cur);
        }

        return pre;
    }
}
