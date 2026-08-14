public class Solution {
    public bool PartitionArray(int[] nums, int k) {
        var n = nums.Length;
        if(n%k != 0)
        return false;

        var m = n/k;
        var f = new Dictionary<int,int>();

        foreach(var num in nums){
            if(!f.ContainsKey(num))
                f[num] = 0;
            f[num]++;
            if(f[num]>m)
                return false;
        }

        return true;
    }
}
