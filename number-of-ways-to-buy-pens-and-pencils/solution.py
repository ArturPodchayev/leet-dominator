class Solution:
    def waysToBuyPensPencils(self, total: int, cost1: int, cost2: int) -> int:
        return sum(((total-i*cost1) // cost2 + 1) for i in range(total // cost1 + 1))
