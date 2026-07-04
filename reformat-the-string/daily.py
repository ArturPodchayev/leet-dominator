class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        graph = defaultdict(list)

        for u, v, d in roads:
            graph[u].append((v, d))
            graph[v].append((u, d))

        visited = [False] * (n + 1)
        ans = float('inf')

        q = deque([1])
        visited[1] = True

        while q:
            node = q.popleft()

            for nei, dist in graph[node]:
                ans = min(ans, dist)
                if not visited[nei]:
                    visited[nei] = True
                    q.append(nei)

        return ans
