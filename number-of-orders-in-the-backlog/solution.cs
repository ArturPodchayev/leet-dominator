public class Solution {
    public int GetNumberOfBacklogOrders(int[][] orders) {
        PriorityQueue<int[], int> buys = new(), sells = new();

        foreach(int[] order in orders)
        {
            int cnt = order[1];
            if(order[2] == 0) // buy
            {
                while(sells.Count > 0 && sells.Peek()[0] <= order[0] && cnt > 0)
                {
                    if(cnt >= sells.Peek()[1])
                    {
                        cnt -= sells.Peek()[1];
                        sells.Dequeue();
                    }
                    else
                    {
                        sells.Peek()[1] -= cnt;
                        cnt = 0;
                    }
                }

                if(cnt > 0)
                    buys.Enqueue([order[0], cnt], -1*order[0]);
            }
            else
            {
                while(buys.Count > 0 && buys.Peek()[0] >= order[0] && cnt > 0)
                {
                    if(cnt >= buys.Peek()[1])
                    {
                        cnt -= buys.Peek()[1];
                        buys.Dequeue();
                    }
                    else
                    {
                        buys.Peek()[1] -= cnt;
                        cnt = 0;
                    }
                }

                if(cnt > 0)
                {
                    sells.Enqueue([order[0], cnt], order[0]);
                }
            }
        }

        long res = 0;
        int mod = 1000000007;
        Console.WriteLine($"buy count : {buys.Count}");
        while(buys.Count > 0)
        {
            res = (res + buys.Peek()[1]) % mod;
            buys.Dequeue();
        }

        while(sells.Count > 0)
        {
            res = (res + sells.Peek()[1]) % mod;
            sells.Dequeue();
        }

        return (int)res;
    }
}
