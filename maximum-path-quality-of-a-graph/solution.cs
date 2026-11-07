public class Solution {
    List<Distance>[] _graph;
    int[] _seen;
    int _maxTime; 
    int[] _values;
    int _ans;
    public int MaximalPathQuality(int[] values, int[][] edges, int maxTime) {
        _values = values;
        _maxTime = maxTime;
        Prepare(edges);
        DFS(0, 0, 0);
        return _ans;
    }

    void DFS(int node, int currTime, int curSum){
        if(currTime > _maxTime) return;
        if(_seen[node] == 0)
            curSum += _values[node];
        if(node == 0)
            _ans = Math.Max(_ans, curSum);
        _seen[node]++;
        foreach(var el in _graph[node]){
            var (to, time) = el;
            DFS(to, time + currTime, curSum);
        }
        _seen[node]--;
    }

    void Prepare(int[][] edges){
        var n = _values.Length;
        _graph = new List<Distance>[n];
        _seen = new int[n];
        for(var i = 0; i < n; i++) _graph[i] = new List<Distance>();
        foreach(var el in edges){
            var node1 = el[0];
            var node2 = el[1];
            var time = el[2];
            _graph[node1].Add(new Distance(node2, time));
            _graph[node2].Add(new Distance(node1, time));
        }
    }

    public record Distance(int To, int Time);
}
