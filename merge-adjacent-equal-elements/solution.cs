public class Solution {
    public IList<long> MergeAdjacent(int[] nums) {
        Stack<long> stack = new Stack<long>();
        foreach (int n in nums)
        {
            long current = n;
            while (stack.Count > 0 && stack.Peek() == current)
            {
                current += stack.Pop();
            }
            stack.Push(current);
        }
        List<long> result = stack.Reverse().ToList();
        return result;
    }
}
