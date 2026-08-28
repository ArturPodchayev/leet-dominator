class Solution:
    def numberOfWeeks(self, milestones: List[int]) -> int:
        maxx=max(milestones)
        summ=sum(milestones)-maxx
        if summ>=maxx:
            return summ+maxx
        return 2*summ+1
