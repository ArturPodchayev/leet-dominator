class Solution:
    def sumOfThree(self, num: int) -> List[int]:
        s = []
        if (num-3)%3==0: #to find the first number
            x=(num-3)//3 # here x and x+1 and x+2 are the required numbers so mathimatically x(x+1)(x+2)=nums by changings we can write x=(nums-3)//3
            s.append(x)
            s.append(x+1)
            s.append(x+2)
        return s
