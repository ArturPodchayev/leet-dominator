MAX = 100001
v = [False] * MAX
sp = [0] * MAX

for i in range(2, MAX, 2):
    sp[i] = 2

for i in range(3, MAX, 2):
    if not v[i]:
        sp[i] = i
        j = i
        while j * i < MAX:
            if not v[j * i]:
                v[j * i] = True
                sp[j * i] = i
            j += 2

def getprimes(n):
    primes = []
    while n > 1:
        if not primes or sp[n] != primes[-1]:
            primes.append(sp[n])
        n //= sp[n]
    return primes

class Solution:
    def maxScore(self, nums, maxVal):
        res = 0
        ns = set(nums)
        ctr = Counter()
        for el in nums:
            primes = getprimes(el)
            m = len(primes)
            for mask in range(1, 1 << m):
                p = 1
                for i in range(m):
                    if mask & (1 << i):
                        p *= primes[i]
                ctr[p] += 1
        numsmax = max(nums)
        for el in range(1, max(maxVal, numsmax) + 1):
            primes = getprimes(el)
            m = len(primes)
            curr = 0
            for mask in range(1, 1 << m):
                p = 1
                sign = -1
                for i in range(m):
                    if mask & (1 << i):
                        p *= primes[i]
                        sign *= -1
                curr += sign * ctr[p]
            if el in ns:
                res = max(res, el - curr + (el != 1))
            elif el <= maxVal:
                res = max(res, el - max(curr, 1))
        return res
