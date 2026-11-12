public class Solution 
{
    public int LongestMonotonicSubarray(int[] nums) 
    {
        int ans=0; 
        var stack = new Stack<int>();
        foreach(var i in nums)
        {
            if(stack.Count==1 && stack.Peek()==i)stack.Clear();
            if(stack.Count>1)
            {
                var x = stack.Pop();
                var y = stack.Peek();
                if(!((y<x && x<i)|| (y>x && x>i)))stack.Clear();
                stack.Push(x); 
            }
            stack.Push(i);
            ans= Math.Max(ans,stack.Count);
        }
        return ans;
    }
}
