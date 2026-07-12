public class Solution {
    public int[] ArrayRankTransform(int[] arr) {
        int n = arr.Length;
        int[] sortedArr = [.. arr];
        Array.Sort(sortedArr);

        var numbers = new Dictionary<long, int>();

        for(int i = 0, j = 0; i < n; i++)
        {
            if(!numbers.ContainsKey(sortedArr[i]))
            {
                numbers.Add(sortedArr[i], j++);
            }
        }

        for(int i = 0; i < n; i++)
        {
            arr[i] = numbers[arr[i]] + 1;
        }

        return arr;
    }
}
