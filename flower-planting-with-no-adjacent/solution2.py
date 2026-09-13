class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:
        adj_matrix = [[] for _ in range(n)]
        flowers = [1, 2, 3, 4]
        result = [0] * n

        if not paths:
            return [1] * n

        for u, v in paths:
            adj_matrix[u - 1].append(v)
            adj_matrix[v - 1].append(u)

        for idx, adjs in enumerate(adj_matrix):
            used_flowers = {result[adj - 1] for adj in adjs}
            result[idx] = next(flower for flower in flowers if flower not in used_flowers)

        return result
        
