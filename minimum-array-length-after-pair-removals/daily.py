class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for char in s:
            if char in '([{':
                stack.append(char)
            else:
                if not stack or stack.pop() != pairs[char]:
                    return False

        return len(stack) == 0
