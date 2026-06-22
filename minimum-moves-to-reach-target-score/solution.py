class Solution:
    def minMoves(self, target: int, maxDoubles: int) -> int:
        answer = 0

        if target % 2 == 1:
            target -= 1
            answer += 1

        while maxDoubles > 0 and target > 1:
            target = target // 2
            if target % 2 == 1:
                answer += 1
                target -= 1
            maxDoubles -= 1
            answer += 1
        
        answer += target - 1
        
        return answer
    
