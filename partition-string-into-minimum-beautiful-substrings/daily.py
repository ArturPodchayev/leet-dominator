class Solution:
    def generateParenthesis(self, n: int) -> List[str]:        
        # Insight: At each recursion step, we can perform two actions
        # 1) Add a left Parenthesis (iff [total left parenthesis] < n)
        # 2) Add a right Parenthesis (iff [total right parenthesis] < [total left parenthesis])

        output = []

        def backTrack(n, cur):

            left, right = cur.count("("), cur.count(")")
            
            # found a well-formed parenthesis
            if left == n and n == right:
                output.append(cur)

            # 1) Add left Parenthesis
            if left < n:
                backTrack(n, cur+"(")

            # 2) Add right Parenthesis
            if right < left:
                backTrack(n, cur+")")
            

        backTrack(n, "")

        return output

        
