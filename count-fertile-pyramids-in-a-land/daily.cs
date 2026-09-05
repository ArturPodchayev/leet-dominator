public class Solution {
    public int FirstStableIndex(int[] nums, int k) {
        var pq1 = new PriorityQueue<int, int>();
        var pq2 = new PriorityQueue<int, int>();
        var deleted = new Dictionary<int, int>();
        var len = nums.Length;
        foreach (var num in nums) pq2.Enqueue(num, num);
        for (var i = 0; i < len; ++i)
        {
            var num = nums[i];
            pq1.Enqueue(num, -num);
            var max = pq1.Peek();
            var min = pq2.Peek();
            while (deleted.ContainsKey(min) && deleted[min] > 0)
            {
                deleted[min]--;
                pq2.Dequeue();
                min = pq2.Peek();
            }            
            if (max - min <= k) return i;
            if (deleted.ContainsKey(num)) deleted[num]++;
            else deleted[num] = 1;
        }
        return -1;
    }
}
