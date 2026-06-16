class Solution:
    def processStr(self, s: str) -> str:
        res = ""
        for i in s:
            if i not in {"*","#","%"}:
                res += i
            elif i == "#":
                res += res
            elif i == "%":
                res = res[::-1]
            else:
                res = res[:-1]
        return res
