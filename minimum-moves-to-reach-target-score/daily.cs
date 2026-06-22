public class Solution {
    public int MaxNumberOfBalloons(string text) {
        Span<int> arr = stackalloc int[200];

        for (int i = 0; i < text.Length; i++)
        {
            arr[text[i]]++;
        }

        return 
        Math.Min(
        Math.Min(
        Math.Min(arr['b'], arr['a']),
        Math.Min(arr['l']>>1, arr['o']>>1)
        ),arr['n']);
    }
}
