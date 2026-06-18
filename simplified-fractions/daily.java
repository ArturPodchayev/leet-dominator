class Solution {
    public double angleClock(int hour, int minutes) {
        double minAngel=minutes*6;
        double hourAngel=(hour%12)*30+minutes*0.5;
        double clockWise=Math.abs(minAngel-hourAngel);
        return Math.min(clockWise,360-clockWise);
    }
}
