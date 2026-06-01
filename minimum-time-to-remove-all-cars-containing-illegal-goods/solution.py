class Solution:
    def minimumTime(self, s: str) -> int:
        count = 0
        x = 0
        for i in s:
            if i=="1":
                count += 1
            else:
                count -= 1
            if count<x:
                x = count
            if count>0:
                count = 0
        return len(s)+x
