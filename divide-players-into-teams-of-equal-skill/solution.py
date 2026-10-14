class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        skill.sort()
        result = 0
        pair = skill[0] + skill[-1]
        result = skill[0] * skill[-1]
        for i in range(1,len(skill)//2):
            if pair == skill[i] + skill[len(skill)-i-1]:
                result += skill[i] * skill[len(skill)-i-1]
            else:
                return -1
        return result
