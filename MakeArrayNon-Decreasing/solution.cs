public class Solution {
    public int MaximumPossibleSize(int[] nums) {
        int n = nums.Length;
        Stack<int> st = new Stack<int>();
        foreach(var num in nums){
            if(st.Count == 0 || st.Peek() <= num){
                st.Push(num);
            }
        }
        return st.Count;
    }
}
