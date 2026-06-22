public class Solution {
    public int MinMoves(int target, int maxDoubles) {

        int minMoves = 0;

        if (maxDoubles == 0)
        {
            return target-1;
        }
        while (maxDoubles > 0 && target != 1)
        {
            if (target % 2 == 0)
            {
                target = target / 2;
                maxDoubles--;
                minMoves++;
            }
            else
            {
                 target--;
                 minMoves++;
            }
        }
        if (target != 1)
        {
            return minMoves + (target - 1);
        }
        return minMoves;
        
    }
}
