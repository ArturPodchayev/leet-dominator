public class Solution {
    public int MinChanges(int[] nums, int k) {
        var map = new Dictionary<int,int>();

        for(int i = 0; i < nums.Length/2; i++){
            var j = nums.Length - 1 - i;
            var diff = Math.Abs(nums[i] - nums[j]);
            if(!map.ContainsKey(diff)){
                map[diff] = 0;
            }
            map[diff]++;
        }
        var sorted = map.Select(x => (x.Key, x.Value)).OrderByDescending(x => x.Item2).ThenBy(x => x.Item1).ToArray();

        var totalRes = int.MaxValue;
        for(int l = 0; l < Math.Min(sorted.Length, 5); l++){
            var test = sorted[l];
            var res = 0;
            for(int i = 0; i < nums.Length/2; i++){
                var j = nums.Length - 1 - i;
                var diff = Math.Abs(nums[i] - nums[j]);
                if(test.Key != diff){
                    if(test.Key > nums[i] && test.Key > nums[j] && k <= nums[i] + nums[j]){
                        res++;
                    }
                    res++;
                }
            }
            totalRes = Math.Min(totalRes, res);
 
        }

 
        return totalRes;
    }
}
