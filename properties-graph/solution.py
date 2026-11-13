from collections import defaultdict
from typing import List

class UnionFind:
    def __init__(self, size: int):
        self.parent = list(range(size))
        self.rank = [1] * size
        self.count = 0

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x: int, y: int) -> bool:
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False

        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        return True

class Solution:
    def numberOfComponents(self, properties: List[List[int]], k: int) -> int:
        n = len(properties)
        if n == 0:
            return 0
        if k <= 0:
            return 1

        sets = [set(row) for row in properties]

        pos = defaultdict(list)
        for i, s in enumerate(sets):
            for v in s:
                pos[v].append(i)

        uf = UnionFind(n)

        for i, s in enumerate(sets):
            counter = defaultdict(int)
            for v in s:
                for j in pos[v]:
                    if j <= i:
                        continue
                    counter[j] += 1
                    if counter[j] == k:
                        uf.union(i, j)

        roots = set(uf.find(i) for i in range(n))
        return len(roots)
