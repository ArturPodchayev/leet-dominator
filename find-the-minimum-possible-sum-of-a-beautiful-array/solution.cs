public class Solution {
    public long MinimumPossibleSum(int n, int target) {
    var set = new HashSet<long>();
    long sum=0;
    long nextNum = 1;
    while (set.Count != n)
    {
        if (set.Contains(nextNum))
            nextNum++;
        else
        {
            set.Add(target - nextNum);
            sum+=nextNum;
            nextNum++;
        }
    }

    return sum;
}
}
