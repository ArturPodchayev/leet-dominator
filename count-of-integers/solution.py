class Solution:
    @cache
    def _count(self, num, digits, min_sum, max_sum, current_sum, tight):
        #print(f'num: {num} digits: {digits} current_sum: {current_sum} tight:{tight}')
        if current_sum > max_sum:
            return 0
        elif current_sum < min_sum and digits == 0:
            return 0
        elif min_sum <= current_sum <= max_sum and digits == 0:
            return 1
        else:
            N = 10 if tight is False else (int(num[len(num)-digits])+1)
            ans = 0
            for d in range(N):
                ans += self._count(num, digits-1, min_sum, max_sum, current_sum + d, tight & (d == int(num[len(num)-digits])))
            return ans
    def check(self, num, min_sum, max_sum):
        s = 0
        for ch in num:
            s += int(ch)
        if min_sum <= s <= max_sum:
            return 1
        else:
            return 0
    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:
        a = self._count(num1, len(num1), min_sum, max_sum, 0, True)
        b = self._count(num2, len(num2), min_sum, max_sum, 0, True)
        c = self.check(num1, min_sum, max_sum)
        return (b-a+c) % (pow(10,9)+7)
        
