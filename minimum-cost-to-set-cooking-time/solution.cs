public class Solution {
    private int GetSteps(int[] digs, int pre, int moveCost, int pushCost)
    {
        // ignore pre 0s:
        int idx = 0, steps = 0;
        while(idx < 4 && digs[idx] == 0)
        {
            idx++;
        }

        if(idx == 4)
            return 0;

        while(idx < 4)
        {
            steps += pushCost;
            if(digs[idx] != pre)
                steps += moveCost;
                
            pre = digs[idx];
            idx++;
        }

        return steps;
    }
    public int MinCostSetTime(int startAt, int moveCost, int pushCost, int targetSeconds) {
        int mins = targetSeconds/60, secs = targetSeconds%60;
        if(mins == 0 && secs == 0)
            return 0;

        if(mins == 100)
        {
            if(secs >= 40)
                return int.MaxValue;

            mins--;
            secs += 60;
        }

        int[] digs = [mins/10, mins%10, secs/10, secs%10];
        int moveSteps = GetSteps(digs, startAt, moveCost, pushCost);

        if(secs + 60 < 100 && mins > 0)
        {
            mins--;
            secs += 60;
        
            digs = [mins/10, mins%10, secs/10, secs%10];
            moveSteps = Math.Min(moveSteps, GetSteps(digs, startAt, moveCost, pushCost));
        }

        return moveSteps;
    }
}
