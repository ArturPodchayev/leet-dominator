public class Solution {
    public int NumberOfRounds(string loginTime, string logoutTime) {
        var t1 = ToInt(loginTime);
        var t2 = ToInt(logoutTime);
        if (t2 < t1)
            t2 += 60*24;
        if (t1%15 != 0)
            t1 += 15-t1%15;
        if (t2 % 15 != 0)
            t2 = (t2/15) * 15;
        if (t1 > t2)
            return 0;
        return (t2-t1) / 15;
    }

    private int ToInt(string time) {
        var sp = time.Split(":");
        return int.Parse(sp[0]) * 60 + int.Parse(sp[1]);
    }
}
