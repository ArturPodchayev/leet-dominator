public class Solution {
    public int GetLastMoment(int n, int[] left, int[] right) {
        int maxSteps = 0;
        foreach(int l in left)
        {
            maxSteps = Math.Max(maxSteps, l);
        }

        foreach(int r in right)
        {
            maxSteps = Math.Max(maxSteps, n-r);
        }

        return maxSteps;
    }
}
