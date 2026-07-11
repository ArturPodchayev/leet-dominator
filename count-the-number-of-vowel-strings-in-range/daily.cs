public class Solution {
    public int CountCompleteComponents(int n, int[][] edges) {
        List<HashSet<int>> graph = new List<HashSet<int>>();
        for (int i = 0; i < n; i++) {
            graph.Add(new HashSet<int>());
        }

        foreach (var edge in edges) {
            int u = edge[0], v = edge[1];
            graph[u].Add(v);
            graph[v].Add(u);
        }

        bool[] visited = new bool[n];
        int completeComponents = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                List<int> component = new List<int>();
                DFS(i, graph, visited, component);

                if (IsComplete(graph, component)) {
                    completeComponents++;
                }
            }
        }

        return completeComponents;
    }
    private void DFS(int node, List<HashSet<int>> graph, bool[] visited, List<int> component) {
        visited[node] = true;
        component.Add(node);

        foreach (int neighbor in graph[node]) {
            if (!visited[neighbor]) {
                DFS(neighbor, graph, visited, component);
            }
        }
    }

    private bool IsComplete(List<HashSet<int>> graph, List<int> component) {
        int size = component.Count;
        int expectedEdges = size * (size - 1) / 2; 

        int actualEdges = 0;
        foreach (int node in component) {
            actualEdges += graph[node].Count;
        }

        actualEdges /= 2; 

        return actualEdges == expectedEdges;
    }
}
