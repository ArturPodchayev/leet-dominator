class Solution:
    def minCharacters(self, a: str, b: str) -> int:
        ct1, ct2 = [0] * 26, [0] * 26
        def countChars(s, arr):
            for c in s:
                arr[ord(c) - ord('a')] += 1
        
        countChars(a, ct1)
        countChars(b, ct2)
        ans = len(a) + len(b)
        def makeStrictLess(arr1, arr2):
            ans = float('inf')
            for i in range(26):
                cnt1 = 0
                for k in range(26):
                    if k > i:
                        cnt1 += arr1[k]
                
                for j in range(i + 1, 26):
                    cnt2 = 0
                    for k in range(26):
                        if k < j:
                            cnt2 += arr2[k]
                    ans = min(ans, cnt1 + cnt2)
            return ans
        ans = min(ans, makeStrictLess(ct1, ct2), makeStrictLess(ct2, ct1), len(a) + len(b) - max(ct1) - max(ct2))
        return ans
