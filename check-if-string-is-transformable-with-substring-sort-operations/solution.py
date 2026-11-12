from collections import defaultdict
class Solution:
    def isTransformable(self, s: str, t: str) -> bool:
        #here love is the array that holds ranges of digits from 0 to 9 (len(love)==10)
        #here see is the array that holds indexes of all the digits in t (len(see)==10)

        total = [0]*10
        #Total array is the frequency of each digit from 0 to 9 in suffix i.e after index i
        temp = [0]*10
        #Temp array is the frequency of each digit from 0 to 9 is prefix i.e before i
        for i in s:
            total[int(i)]+=1
        love = [[] for i in range(10)]
        ##Love is range 
        for i in s:
            ko = int(i)
            lo = sum(temp[:ko+1]) ##Getting lower_value
            temp[ko] += 1 #Updating temp
            total[ko] -= 1 #Updating total
            up = sum(total[ko:])
            up = len(s)-up-1 #getting upper_index
            love[ko].append([lo,up])
        for i in range(len(love)):
            love[i].sort() ##Sorting ranges
        see = [[] for i in range(10)]
        for i in range(len(t)):
            ii = int(t[i])
            see[ii].append(i)
        # for i in range(10):see[i].sort() #No need to sort indexes they are already sorted
        def checkNum(num): #Function that checkes whether indexes are attainable or not for a digit num
            if len(see[num])!=len(love[num]):return False
            for i in range(len(see[num])):
                if see[num][i] not in range(love[num][i][0],love[num][i][1]+1):return False
            return True
        for i in range(10):
            if not checkNum(i):return False
        return True
