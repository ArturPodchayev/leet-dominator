class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:

        prefix_days_count = []
        prefix_sum = 0

        for day in [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]:
            prefix_sum += day
            prefix_days_count.append(prefix_sum) 
        
        def getdays(s):
            month, day = s.split("-")
            day = int(day)
            month = int(month)
            return day + prefix_days_count[month-1]

        arriveAlice = getdays(arriveAlice)
        leaveAlice = getdays(leaveAlice)
        arriveBob = getdays(arriveBob)
        leaveBob = getdays(leaveBob)

        max_arrive = max(arriveAlice, arriveBob)
        min_leave = min(leaveAlice, leaveBob)

        if max_arrive > min_leave:
            return 0
        return min_leave - max_arrive +1
