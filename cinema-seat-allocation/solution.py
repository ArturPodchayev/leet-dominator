class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        res = n*2
        j=0
        reservedSeats.sort()

        while j<len(reservedSeats):
            cur_row = reservedSeats[j][0]
            isle1,isle2left,isle2right,isle3=False,False,False,False
            while j<len(reservedSeats) and reservedSeats[j][0]==cur_row:
                seat = reservedSeats[j][1]
                if seat==2 or seat==3: isle1=True
                elif seat==4 or seat==5: isle2left=True
                elif seat==6 or seat==7: isle2right=True
                elif seat==8 or seat==9: isle3=True
                j+=1
            
            if (isle1 and isle2right)or(isle3 and isle2left)or(isle2left and isle2right):
                res-=2
            elif isle1 or isle2left or isle2right or isle3:
                res-=1

        return res
