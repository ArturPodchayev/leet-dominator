class Solution:
    def findOriginalArray(self, changed: List[int]) -> List[int]:
        ans = []
        mx = max(changed)
        cnt = [0] * (mx + 1)
        for num in changed:
            cnt[num] += 1
        for num in range(mx, -1, -1):
            if not cnt[num]:
                continue
            if num % 2 or not cnt[num // 2] or (num // 2 == num and cnt[num] % 2):
                return []
            while cnt[num]:
                if not cnt[num // 2]:
                    return []
                ans.append(num // 2)
                cnt[num] -= 1
                cnt[num // 2] -= 1
        return ans
