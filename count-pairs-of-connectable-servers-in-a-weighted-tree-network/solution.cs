public class Solution {
    public int[] CountPairsOfConnectableServers(int[][] edges, int signalSpeed)
{
    int items = edges.Length;
    int[] res = new int[items + 1];
    List<(int, int)>[] paths = new List<(int, int)>[items + 1];

    for (int i = 0; i < items + 1; i++)
    {
        List<(int, int)> itm = new List<(int, int)>();
        paths[i] = itm;
    }

    for (int i = 0; i < items; i++)
    {
        int pos = edges[i][0];
        int pos2 = edges[i][1];

        paths[pos].Add((edges[i][1], edges[i][2]));
        paths[pos2].Add((edges[i][0], edges[i][2]));
    }

    int thisPos = 0;
    HashSet<int> visited = new HashSet<int>();
    while (thisPos < items + 1)
    {
        visited = new HashSet<int>();
        List<(int, int)> thisItems = paths[thisPos];

        List<int> sums = new List<int>();
        visited.Add(thisPos);
        if (thisItems.Count < 2)
        {
            res[thisPos] = 0;
            thisPos++;
            continue;
        }
        for (int i = 0; i < thisItems.Count; i++)
        {
            int val = 0;
            int couuu = 0;

            Queue<((int, int), int)> points = new Queue<((int, int), int)> ();

            if (!visited.Contains(thisItems[i].Item1))
                points.Enqueue((thisItems[i] , thisItems[i].Item2));

            visited.Add(thisItems[i].Item1);                

            while (points.Count > 0)
            {
                ((int, int), int) iittm = points.Dequeue();
                val = iittm.Item2;
                int edge = iittm.Item1.Item1;

                visited.Add(iittm.Item1.Item1);

                List<(int, int)> nItms = paths[edge];

                if (val % signalSpeed == 0)
                    couuu++;

                foreach (var item in nItms)
                {
                    if (!visited.Contains(item.Item1))
                    {
                        points.Enqueue((item, val + item.Item2));
                    }
                }
            }

            sums.Add(couuu);
        }
        int resss = 0;
        int sumss = sums.Sum();
        for (int z = 0; z < sums.Count; z++)
        {
            resss += (sumss - sums[z]) * sums[z];
        }
        res[thisPos] = resss/2;
        thisPos++;
    }

    return res;
}
}
