class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        n = len(arr)
        if n <= k:
            return max(arr)
        winner = arr[0]
        win_count = 0

        for i in range(1, n):
            if arr[i] > winner:
                winner = arr[i]
                win_count = 1
            else:
                win_count += 1

            if win_count == k:
                break

        return winner
