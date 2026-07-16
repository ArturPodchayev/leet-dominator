class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        op = []
        stack = []
        i=1
        j = 0
        while i<=n and j<len(target):
            stack.append(i)
            op.append("Push")
            if target[j] != i:
                stack.pop()
                op.append("Pop")
            else:
                j+=1
            i+=1
        return op
