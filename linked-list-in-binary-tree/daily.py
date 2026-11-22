class Solution:
    def checkString(self, s: str) -> bool:
        lastA = -1
        firstB = 101
        check = 0
        n = len(s)
        for i in range(n):
            if s[i] == "a":
                lastA = i
            if s[i] == "b" and check == 0:
                check = 1
                firstB = i
        return lastA < firstB
