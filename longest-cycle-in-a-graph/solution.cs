public class Solution
{
    public int LongestCycle(int[] edges)
    {
        var result = -1;
        var visited = new bool[edges.Length];

        for (int i = 0; i < edges.Length; i++)
        {
            var set = new HashSet<int>();
            var next = edges[i];
            while (true)
            {
                if (next == -1) break;
                if (set.Add(next))
                {
                    if (visited[next]) break;
                    visited[next] = true;
                    next = edges[next];
                }
                else
                {
                    CalculateCircle(next);
                    break;
                }
            }
        }

        return result;

        void CalculateCircle(int node)
        {
            var temp = 1;
            var next = edges[node];
            while (next != node)
            {
                temp++;
                next = edges[next];
            }

            result = Math.Max(result, temp);
        }
    }
}
