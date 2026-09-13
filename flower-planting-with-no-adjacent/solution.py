from collections import defaultdict

class Solution:
    def gardenNoAdj(self, n: int, paths: list[list[int]]) -> list[int]:
        answer = [0] * n
        map = defaultdict(list)

        for i, j in paths:
            map[i].append(j)
            map[j].append(i)

        for garden, adjacent in map.items():
            if answer[garden-1] > 0:
                continue

            answer[garden-1] = ({1,2,3,4} - {answer[g-1] for g in adjacent if answer[g-1] > 0}).pop()

        return (flower if flower > 0 else 1 for flower in answer)
