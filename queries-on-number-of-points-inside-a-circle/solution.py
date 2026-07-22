class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        points = list(map(complex, *zip(*points)))
		queries = ((complex(x, y), r) for x, y, r in queries)
        return [sum(abs(p - q) <= r for p in points) for q, r in queries]
