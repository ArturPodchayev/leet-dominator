class Solution:
    def findWinningPlayer(self, skills: List[int], k: int) -> int:

        n = len(skills)
        max_skill = max(skills)
        max_index = skills.index(max_skill)

        if k >= n - 1:
            return max_index

        current_winner = 0
        win_count = 0

        for i in range(1, n):
            if skills[current_winner] > skills[i]:
                win_count += 1
            else:
                current_winner = i
                win_count = 1

            if win_count == k:
                return current_winner

        return current_winner
    
