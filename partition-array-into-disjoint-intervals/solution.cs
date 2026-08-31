public class Solution {
    
        public int PartitionDisjoint(int[] nums)
        {
            int[] left_max = new int[nums.Length];
            left_max[0] = nums[0];
            
            int[]  right_Min = new int[nums.Length];
            right_Min[nums.Length - 1] = nums[nums.Length - 1];
            
            for (int i = 1; i < nums.Length; i++)
            {
                left_max[i] = Math.Max(left_max[i - 1], nums[i]);
            }

            for (int i = nums.Length - 2; i >= 0; --i)
            {
                right_Min[i] = Math.Min(right_Min[i + 1], nums[i]);
            }

            for (int i = 1; i < nums.Length; i++)
            {
                if (left_max[i - 1] <= right_Min[i])
                {
                    return i;
                }
            }
            
            return -1;
        }

        public int PartitionDisjoint_UsingHeap(int[] nums)
        {
            // Create a Min Heap using SortedSet
            SortedSet<(int, int)> minHeap = new SortedSet<(int, int)>(Comparer<(int, int)>.Create((a, b) =>
            {
                var r = a.Item1.CompareTo(b.Item1);
                return r == 0 ? -1 * a.Item2.CompareTo(b.Item2) : 1 * r;
            }));

            int index = 0;
            foreach (var num in nums)
            {
                minHeap.Add((num, index));
                index++;
            }
            
            int max_left = Int32.MinValue;
            int result = -1;
            for (int i = 0; i < nums.Length; i++)
            {
                int n = nums[i];
                max_left = Math.Max(max_left, n);
                minHeap.Remove((n,i));
                
                (int min_Num_Right, _) = minHeap.Min();
                if (max_left <= min_Num_Right)
                {
                    return i + 1;
                }
            }
            
            return -1;
        }
}
