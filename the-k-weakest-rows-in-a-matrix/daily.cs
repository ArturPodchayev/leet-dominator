public class Solution {
    public int ClimbStairs(int n, int[] costs) {


        PriorityQueue<(int cost, int step), int> heap = new PriorityQueue<(int, int), int>();
        heap.Enqueue((0, 0), 0);
        
        int[] distance = new int[n + 1];
        Array.Fill(distance, int.MaxValue);
        distance[0] = 0;
        
        while (heap.Count > 0) {
            var (c, i) = heap.Dequeue();
            
            if (c <= distance[i]) {
                for (int k = 1; k <= 3; k++) {
                    int x = i + k;
                    if (x - 1 < n) {
                        int v = costs[x - 1] + (x - i) * (x - i);
                        if (distance[x] > c + v) {
                            heap.Enqueue((c + v, x), c + v);
                            distance[x] = c + v;
                        }
                    }
                }
            }
        }
        
        return distance[n];
    }
}
