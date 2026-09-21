public class Solution {
    public IList<int> RelocateMarbles(int[] nums, int[] moveFrom, int[] moveTo) {
        HashSet<int> data = nums.ToHashSet();

        for (int i = 0; i < moveFrom.Length; ++i) 
            if (data.Remove(moveFrom[i])) 
                data.Add(moveTo[i]);

        return data.OrderBy(item => item).ToList();
    }
}
