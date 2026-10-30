public class Solution 
{
    public int[] RecoverOrder(int[] order, int[] friends) 
    {
        var d1 = new Dictionary<int, int>();
        var result = new int[friends.Length];

        for (int i = 0; i < friends.Length; i++)
        {
            d1.Add(friends[i], i);
        }

        for (int i = 0, j = 0; i < order.Length; i++)
        {
            if (d1.TryGetValue(order[i], out var didx))
                result[j++] = friends[didx];
        }

        return result;
    }
}
