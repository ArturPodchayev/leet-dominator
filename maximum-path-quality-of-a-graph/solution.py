class Solution:
    def maximalPathQuality(self, values: List[int], edges: List[List[int]], maxTime: int) -> int:
        adj_list = defaultdict(list)
        for u, v, t in edges:
            adj_list[u].append((v, t))
            adj_list[v].append((u, t))

        # dijkstra's algorithm
        min_time = [float('inf')] * len(values)
        min_time[0] = 0
        pq = [(0, 0)]
        
        while pq:
            t, u = heapq.heappop(pq)
            if t > min_time[u]:
                continue
            for v, edge_time in adj_list[u]:
                if t + edge_time < min_time[v]:
                    min_time[v] = t + edge_time
                    heapq.heappush(pq, (min_time[v], v))

        res = values[0]
        visited = [0] * len(values)
        visited[0] = 1
        curr_score = values[0]

        def dfs(node, curr_time):
            nonlocal curr_score, res
            if curr_time < 0:
                return
            if node == 0:
                res = max(res, curr_score)
            
            for neighbour, t in adj_list[node]:
                if curr_time + t + min_time[neighbour] <= maxTime:
                    visited[neighbour] += 1
                    if visited[neighbour] == 1:
                        curr_score += values[neighbour]
                    
                    dfs(neighbour, curr_time + t)
                    
                    visited[neighbour] -= 1
                    if visited[neighbour] == 0:
                        curr_score -= values[neighbour]
        
        dfs(0, 0)
        return res
