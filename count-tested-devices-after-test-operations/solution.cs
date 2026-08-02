public class Solution {
    public int CountTestedDevices(int[] batteryPercentages) 
      => batteryPercentages.Aggregate(0, (c, p) => p-c > 0 ? ++c : c);
}
