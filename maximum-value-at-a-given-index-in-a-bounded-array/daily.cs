public sealed class Dsu
        {
            private readonly int[] _parent;
            private readonly int[] _size;

            public Dsu(int n)
            {
                _parent = new int[n + 1];
                _size = new int[n + 1];
                for (var i = 0; i <= n; i++)
                {
                    _parent[i] = i;
                    _size[i] = 1;
                }
            }

            public int Find(int x)
            {
                while (_parent[x] != x)
                {
                    _parent[x] = _parent[_parent[x]];
                    x = _parent[x];
                }

                return x;
            }

            public void Union(int a, int b)
            {
                a = Find(a);
                b = Find(b);

                if (a == b)
                {
                    return;
                }

                if (_size[a] < _size[b])
                {
                    (a, b) = (b, a);
                }

                _parent[b] = a;
                _size[a] += _size[b];
            }
        }

        public class Solution
        {
            private const int Mod = 1_000_000_007;

            private readonly struct Frame(int node, int parent, int nextChildIndex)
            {
                public int Node { get; } = node;
                public int Parent { get; } = parent;
                public int NextChildIndex { get; } = nextChildIndex;
            }

            public int[] AssignEdgeWeights(int[][] edges, int[][] queries)
            {
                var n = edges.Length + 1;
                var graph = new List<int>[n + 1];
                var queryList = new List<(int other, int index)>[n + 1];

                for (var i = 0; i <= n; i++)
                {
                    graph[i] = [];
                    queryList[i] = [];
                }

                foreach (var edge in edges)
                {
                    int u = edge[0], v = edge[1];
                    graph[u].Add(v);
                    graph[v].Add(u);
                }

                for (var i = 0; i < queries.Length; i++)
                {
                    int u = queries[i][0], v = queries[i][1];
                    queryList[u].Add((v, i));
                    queryList[v].Add((u, i));
                }

                var pow2 = GetPow2(n);

                var dsu = new Dsu(n);
                var ancestor = new int[n + 1];
                var depth = new int[n + 1];
                var completed = new bool[n + 1];
                var answer = new int[queries.Length];

                ancestor[dsu.Find(1)] = 1;

                var stack = new Stack<Frame>();
                stack.Push(new Frame(1, 0, 0));

                while (stack.Count > 0)
                {
                    var frame = stack.Pop();
                    var u = frame.Node;

                    if (frame.NextChildIndex < graph[u].Count)
                    {
                        var v = graph[u][frame.NextChildIndex];
                        stack.Push(new Frame(u, frame.Parent, frame.NextChildIndex + 1));

                        if (v == frame.Parent)
                        {
                            continue;
                        }

                        depth[v] = depth[u] + 1;
                        ancestor[dsu.Find(v)] = v;
                        stack.Push(new Frame(v, u, 0));
                        continue;
                    }

                    completed[u] = true;

                    foreach (var (v, queryIndex) in queryList[u])
                    {
                        if (!completed[v])
                        {
                            continue;
                        }

                        var lca = ancestor[dsu.Find(v)];
                        var len = depth[u] + depth[v] - 2 * depth[lca];
                        answer[queryIndex] = len == 0 ? 0 : pow2[len - 1];
                    }

                    if (frame.Parent != 0)
                    {
                        dsu.Union(frame.Parent, u);
                        ancestor[dsu.Find(frame.Parent)] = frame.Parent;
                    }
                }

                return answer;
            }

            private static int[] GetPow2(int n)
            {
                var pow2 = new int[n];
                pow2[0] = 1;
                for (var i = 1; i < n; i++)
                {
                    pow2[i] = (int)(pow2[i - 1] * 2L % Mod);
                }

                return pow2;
            }
        }
