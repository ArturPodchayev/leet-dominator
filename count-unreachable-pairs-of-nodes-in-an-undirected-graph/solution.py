from collections import deque
from typing import List

class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        # Build adjacency list
        adj_lst = {i: [] for i in range(n)}
        for u, v in edges:
            adj_lst[u].append(v)
            adj_lst[v].append(u)

        visited = set()
        components = []

        # BFS to find connected components/connected nodes
        def bfs(start):
            q = deque([start])
            visited.add(start)
            size = 0
            while q:
                node = q.popleft()
                size += 1
                for nei in adj_lst[node]:
                    if nei not in visited:
                        visited.add(nei)
                        q.append(nei)
            return size

        # Collect component sizes
        for i in range(n):
            if i not in visited:
                comp_size = bfs(i)
                components.append(comp_size)

        # Count unreachable pairs 
        # find all possible edges & all reachable nodes
        total_pairs = (n * (n - 1)) // 2
        reachable_pairs = 0

        for size in components:
            reachable_pairs += (size * (size - 1)) // 2

        return total_pairs - reachable_pairs
