public class Solution {
    public int CountDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob)
    {
        var aliceArriveDate = ToDateOnly(arriveAlice);
        var aliceLeaveDate = ToDateOnly(leaveAlice);
        var bobArriveDate = ToDateOnly(arriveBob);
        var bobLeaveDate = ToDateOnly(leaveBob);

        var start = aliceArriveDate > bobArriveDate ? aliceArriveDate : bobArriveDate;
        var end = aliceLeaveDate > bobLeaveDate ? bobLeaveDate : aliceLeaveDate;

        return Math.Max(0, end.DayNumber - start.DayNumber + 1);
    }

    private static DateOnly ToDateOnly(string date)
    {
        int month = (date[0] - '0') * 10 + (date[1] - '0');
        int day = (date[3] - '0') * 10 + (date[4] - '0');

        return new DateOnly(2026, month, day);
    }
}
