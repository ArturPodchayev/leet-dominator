class Solution:
    def maxWeight(self, pizzas: List[int]) -> int:
        days = len(pizzas) // 4
        maxi = 0
        if days%2:
            maxi = days // 2 + 1
        else:
            maxi = days // 2
        pizzas.sort()
        ans = sum(pizzas[-maxi:])
        left = days - maxi
        for i in range(len(pizzas)-maxi-1, -1, -2):
            if left == 0:
                break
            ans += pizzas[i-1]
            left -= 1
        return ans
