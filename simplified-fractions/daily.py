class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        min_angle=round(360/(60/minutes),5) if minutes!=0 and minutes!=60 else 0
        hour_extra_gap=round(30/(60/minutes),5) if minutes!=0 and minutes!=60 else 0
        hour_angle=round((360/12)*hour,5) if hour!=12 else 0
        hour_angle+=hour_extra_gap
        diff=round(abs(hour_angle-min_angle),5)
        diff2=round(360-diff,5)
        return min(diff,diff2)
