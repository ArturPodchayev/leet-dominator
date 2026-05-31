class Solution:
    def dfs(self, node, parent, g, weight, an, s):
        if not weight % s: an[0] += 1
        for i in g[node]:
            if i[0] == parent: continue
            self.dfs(i[0], node, g, weight + i[1], an, s)
    def countPairsOfConnectableServers(self, edges: List[List[int]], signalSpeed: int) -> List[int]:                
        graph = defaultdict(list)
        for u, v, weight in edges:
            graph[u].append([v, weight])
            graph[v].append([u, weight])
        ans = [0 for _ in range(len(edges) + 1)]
        for i in range(len(edges)+1):
            num = 0
            v = []
            for j in graph[i]:
                an = [0]
                self.dfs(j[0], i, graph, j[1], an, signalSpeed)
                v.append(an[0])
            for j in range(len(v)):
                for k in range(j+1, len(v)):
                    num += v[j]*v[k]
            ans[i] = num
        return ans
