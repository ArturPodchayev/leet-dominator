public class Solution {
    public int MinimumDiameterAfterMerge(int[][] edges1, int[][] edges2) {
        var adj1 = new Dictionary<int,List<int>>();
        var adj2 = new Dictionary<int,List<int>>();

        foreach(var edge in edges1){
            var u = edge[0];
            var v = edge[1];
            if(!adj1.ContainsKey(u))
                adj1[u] = new List<int>();
            if(!adj1.ContainsKey(v))
                adj1[v] = new List<int>();

            adj1[u].Add(v);
            adj1[v].Add(u);
        }
        foreach(var edge in edges2){
            var u = edge[0];
            var v = edge[1];
            if(!adj2.ContainsKey(u))
                adj2[u] = new List<int>();
            if(!adj2.ContainsKey(v))
                adj2[v] = new List<int>();

            adj2[u].Add(v);
            adj2[v].Add(u);
        }

        int BFS1(Dictionary<int,List<int>> adj){
            var queue = new Queue<int>();
            var visit = new HashSet<int>();
            queue.Enqueue(0);
            visit.Add(0);
            int last = 0;
            while(queue.Count>0){
                var len = queue.Count;
                for(int i=0;i<len;i++){
                    var node = queue.Dequeue();
                    last = node;
                    if(adj.ContainsKey(node)){
                        foreach(var nei in adj[node]){
                            if(!visit.Contains(nei)){
                                visit.Add(nei);
                                queue.Enqueue(nei);
                            }
                        }
                    }
                }
            }
            return last;
        }
        var start1 = BFS1(adj1);
        var start2 = BFS1(adj2);

        int BFS2(Dictionary<int,List<int>> adj, int src){
            var queue = new Queue<int>();
            var visit = new HashSet<int>();
            queue.Enqueue(src);
            visit.Add(src);
            int level = 0;
            while(queue.Count>0){
                var len = queue.Count;
                level++;
                for(int i=0;i<len;i++){
                    var node = queue.Dequeue();
                    if(adj.ContainsKey(node)){
                        foreach(var nei in adj[node]){
                            if(!visit.Contains(nei)){
                                visit.Add(nei);
                                queue.Enqueue(nei);
                            }
                        }
                    }
                }
            }
            return level-1;
        }
        var len1 = BFS2(adj1,start1);
        var len2 = BFS2(adj2,start2);

        return Math.Max(len1,Math.Max(len2,((len1+1)/2 + (len2+1)/2 + 1)));
    }
}
