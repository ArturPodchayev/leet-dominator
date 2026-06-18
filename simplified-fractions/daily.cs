public class Solution {
    public double AngleClock(int hour, int minutes) {
        double angle  = (30 * hour) - (5.5 * minutes);
        angle = Math.Abs(angle);
        if(angle > 180)
        {
            angle = 360 - angle;
        }
       return angle;
    }
}
