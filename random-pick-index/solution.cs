public class Solution {
    private int[] _nums;
    private Random _rand;

    public Solution(int[] nums) {
        _nums = nums;
        _rand = new Random();
    }
    
    public int Pick(int target) {
        int index = 0;
        int count = 0;
        for (int i = 0; i < _nums.Length; i++) {
            if (_nums[i] == target) {
                count += 1;
                double r = _rand.NextDouble();
                if (r < 1.0/count)
                    index = i;
            }
        }
        return index;
    }
}
