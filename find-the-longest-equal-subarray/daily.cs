public class Solution
{
    public int[] MaxDepthAfterSplit(string seq)
    {
        var depth = 0;
        return seq
            .Select(c => c == '(' ? ++depth % 2 : depth-- % 2)
            .ToArray();
    }
}
