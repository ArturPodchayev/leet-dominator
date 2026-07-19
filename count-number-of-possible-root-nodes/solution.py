class Solution:
    def rootCount(self, edges: List[List[int]], guesses: List[List[int]], k: int) -> int:
        @cache
        def dfs(u: int, v: int) -> int:
            res = 0
            for w, score in al[v].items():
                res += score + dfs(v, w) if w != u else 0
            return res
        al = [{} for _ in range(len(edges) + 1)]
        for a, b in edges:
            al[a][b] = al[b][a] = 0
        for u, v in guesses:
            al[u][v] = 1
        return sum(1 if dfs(-1, u) >= k else 0 for u in range(len(edges) + 1))
