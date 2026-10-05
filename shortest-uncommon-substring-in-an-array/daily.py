class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack = [] # [score, closed]

        for c in s:
            if c == "(":
                stack.append([0, False])
            else:
                score = 0
                while stack[-1][1]:
                    sc, _ = stack.pop()
                    score += sc
                if score == 0:
                    stack[-1][0] = 1
                else:
                    stack[-1][0] = 2 * score
                stack[-1][1] = True
        
        return sum([st[0] for st in stack])
