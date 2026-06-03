public class Solution {
    public int EarliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {
        int res = int.MaxValue;
        int minLand = int.MaxValue;
        int minWater = int.MaxValue;

        for(int i= 0; i< landStartTime.Length; i++)
        {
            if(landStartTime[i]+landDuration[i]<minLand)
            {
                minLand = landStartTime[i]+landDuration[i];
            }
        }

        for(int i= 0; i< waterStartTime.Length; i++)
        {
            if(waterStartTime[i]+waterDuration[i]<minWater)
            {
                minWater = waterStartTime[i]+waterDuration[i];
            }            
        }         

        for(int i= 0; i< landStartTime.Length; i++)
        {
            if(landStartTime[i]<=minWater)
            {
                if(minWater + landDuration[i] < res)
                {
                    res = minWater + landDuration[i];
                }
            }
            else
            {
                if(landStartTime[i] + landDuration[i] < res)
                {
                    res = landStartTime[i] + landDuration[i];
                }                
            }
        }

        for(int i= 0; i< waterStartTime.Length; i++)
        {
            if(waterStartTime[i]<=minLand)
            {
                if(minLand + waterDuration[i] < res)
                {
                    res = minLand + waterDuration[i];
                }                
            }
            else
            {
                if(waterStartTime[i] + waterDuration[i] < res)
                {
                    res = waterStartTime[i] + waterDuration[i];
                }                  
            }
        }

        return res;           
    }
}
