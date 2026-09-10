public class Solution {
    public long MaximumScore(int[] nums, string s) {
        var agenda = new PriorityQueue<long, long>();
       
        long result = 0;

        for (int i = 0; i < s.Length; ++i) {
            agenda.Enqueue(nums[i], -nums[i]);

            if (s[i] == '1')
                result += agenda.Dequeue();
        }

        return result;
    }
}
