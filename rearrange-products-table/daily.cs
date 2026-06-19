public class Solution {
    public int LargestAltitude(int[] gain) {
        int maxAltitude = 0;
        int currentAltitude = 0;
        foreach (int g in gain) {
            currentAltitude += g;
            maxAltitude = Math.Max(maxAltitude, currentAltitude);
        }
        return maxAltitude;        
    }
}
