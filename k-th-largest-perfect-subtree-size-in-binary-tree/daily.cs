public class Solution
{
    public long FindKthSmallest(int[] coins, int k)
    {
        var uniqCoins = new List<int>(coins);
        uniqCoins.Sort();
        for (var i = 0; i < uniqCoins.Count; i++)
        for (var j = i + 1; j < uniqCoins.Count; j++)
            if (uniqCoins[j] % uniqCoins[i] == 0)
                uniqCoins.RemoveAt(j--);

        var longK = (long)k;
        var coinCombs = new long[uniqCoins.Count];
        var maxK = FillCombinations(longK, coinCombs, uniqCoins);

        var minK = Math.Max(longK * longK / maxK - 2, 0);
        Array.Fill(coinCombs, 0);
        var initK = FillCombinations(minK, coinCombs, uniqCoins);

        // Logic behind this : 
        //  longK -> maxK
        //  minK  -> longK

        var kthAmount = coinCombs[0] * uniqCoins[0];
        var queue = new PriorityQueue<long, long>();
        queue.Enqueue(uniqCoins[0], kthAmount + uniqCoins[0]);
        for(int i = 1; i < uniqCoins.Count; i++)
            queue.Enqueue(uniqCoins[i], (kthAmount / uniqCoins[i] + 1) * uniqCoins[i]);

        // |initK - longK| < coins.Lenght * 2 <= 30 // true 
        while (initK++ < longK)
        {
            queue.TryDequeue(out var coin, out var nextAmount);
            queue.Enqueue(coin, nextAmount + coin);
            if (kthAmount == nextAmount) initK--;
            kthAmount = nextAmount;
        }

        return kthAmount;
    }

    private static long FillCombinations(long k, long[] coinCombs, List<int> coins)
    {
        var allCombs = 1 << coins.Count;
        var maxAmount = k * coins[0];
        var combsCount = 0L;

        for (var num = 1; num < allCombs; num++)
        {
            var lastBit = 0;
            var bitCount = 0;
            var comb = 1;
            for (var bit = 0; bit < coins.Count; bit++)
            {
                if ((num & (1 << bit)) > 0)
                {
                    lastBit = bit;
                    bitCount++;
                    comb = Lcm(comb, coins[bit]);
                }
            }

            coinCombs[lastBit] += maxAmount / comb * (bitCount % 2 == 1 ? 1 : -1);
        }

        for (int i = 0; i < coinCombs.Length; i++) combsCount += coinCombs[i];

        return combsCount;
    }

    private static int Gcf(int a, int b)
    {
        while (b != 0)
        {
            int temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    private static int Lcm(int a, int b)
    {
        return (a / Gcf(a, b)) * b;
    }
}
