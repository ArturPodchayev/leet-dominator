class Solution:
    def minCostSetTime(self, startAt: int, moveCost: int, pushCost: int, targetSeconds: int) -> int:
        # ahhhhhh yeah

        # only worth moving if we're going to push another button

        # clever ways: probably

        # OR: super brute force: generate all digit combinations, convert to time, if equal to targetSeconds then compute cost

        # max time is 6039
        # is that 59:99?
        #         60:39   yep!

        minCost = math.inf
        for n in range(1, 9999+1):
            s = n % 100
            m = n // 100
            t = 60*m + s
            if t == targetSeconds:
                digits = []
                while n:
                    digits.append(n % 10)
                    n //= 10

                cost = pushCost * len(digits)
                b = startAt
                for d in reversed(digits):
                    if d != b:
                        # move to d
                        cost += moveCost
                        b = d
                minCost = min(minCost, cost)

        return minCost
