public class Solution {
    public int[] ShortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) 
    {
        var result = Enumerable.Repeat(-1, n).ToArray();

        // the graph of the nodes with it link to red and blue edges
        var graph = GetGraph(n, redEdges, blueEdges);

        // store hashset of visited nodes, where second int is 0 for Red or 1 for Blue
        var visited = new HashSet<(int, int)>();

        // create a queue for traversing using breadth first search
        var queue = new Queue<(int, int, int)>();
        
        // start from the first node with red edge
        queue.Enqueue((0, 0, 0));

        // start from the first node with blue edge
        queue.Enqueue((0, 1, 0));

        while (queue.Count > 0)
        {
            // get the current step of the traversal
            var (node, color, step) = queue.Dequeue();
                       
            result[node] = result[node] == -1 ? step : Math.Min(result[node], step);

            // get neighbours on the current edge color
            var (reds, blue) = graph[node];

            // pick the neighbours of the proper color
            var neighbours = color == 0 ? reds : blue;
            foreach (var neighbour in neighbours)
            {
                // if we already visited this node on the edge
                if (visited.Contains((neighbour, 1 - color)))
                {
                    continue;
                }

                // move to the next node and alternate the color
                queue.Enqueue((neighbour, 1 - color, step + 1));

                // add the node to the list of visited one
                visited.Add((neighbour, 1 - color));
            }
        }

        return result;
    }

    private Dictionary<int, (List<int>, List<int>)> GetGraph(int n, int[][] redEdges, int[][] blueEdges)
    {
        var result = new Dictionary<int, (List<int>, List<int>)>();
        for (int i = 0; i < n; i++)
        {
            result[i] = (new List<int>(), new List<int>());
        }

        for (int i = 0; i < redEdges.Length; i++)
        {
            var nodeFrom = redEdges[i][0];
            var nodeTo = redEdges[i][1];

            result[nodeFrom].Item1.Add(nodeTo);
        }

        for (int i = 0; i < blueEdges.Length; i++)
        {
            var nodeFrom = blueEdges[i][0];
            var nodeTo = blueEdges[i][1];

            result[nodeFrom].Item2.Add(nodeTo);
        }

        return result;
    }
}
