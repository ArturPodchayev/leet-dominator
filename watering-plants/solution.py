class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        steps = 0
        c = capacity
        for i,p in enumerate(plants):
            if c>=p:
                c -= p
                steps += 1
            else:
                c = capacity
                steps += 2*i+1
                c -= p
        return steps
        
