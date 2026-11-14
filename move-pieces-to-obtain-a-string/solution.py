class Solution:
    def canChange(self, start: str, target: str) -> bool:
        start = '_' + start + '_'
        target = '_' + target + '_'
        n = len(start)
        if n != len(target):
            return False
        startStack, targetStack = [], []
        for idx in range(n):
            if start[idx] != '_':
                startStack.append(start[idx])
            if target[idx] != '_':
                targetStack.append(target[idx])
        if len(startStack) != len(targetStack):
            return False
        for idx in range(len(startStack)):
            if startStack[idx] != targetStack[idx]:
                return False
        startIdx = targetIdx = 0
        while targetIdx < n:
            if target[targetIdx] == 'L':
                while startIdx < n:
                    if start[startIdx] == 'L':
                        if startIdx < targetIdx:
                            return False
                        else:
                            startIdx += 1
                            break
                    startIdx += 1
                if startIdx == n:
                    return False
            targetIdx += 1
        startIdx = targetIdx = n - 1
        while targetIdx > -1:
            if target[targetIdx] == 'R':
                while startIdx > -1:
                    if start[startIdx] == 'R':
                        if startIdx > targetIdx:
                            return False
                        else:
                            startIdx -= 1
                            break
                    startIdx -= 1
                if startIdx == -1:
                    return False
            targetIdx -= 1
        return True
