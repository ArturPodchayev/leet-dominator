public class Solution {
    public int[] GetStrongest(int[] arr, int k) {
        Array.Sort(arr);
        int m = arr[(arr.Length - 1) / 2];
        return arr.OrderBy(x => -Math.Abs(x - m)).ThenBy(x => -x).Take(k).ToArray();
    }
}
