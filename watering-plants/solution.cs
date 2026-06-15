public class Solution {
    public int WateringPlants(int[] plants, int capacity) {
        int len = plants.Length;
        int pre = capacity, res = len;
        for(int i = 0; i < len; i++)
        {
            int cur = plants[i];
            if(pre < cur)
            {
                res += 2*i;
                pre = capacity;
            }

            pre -= cur;
        }

        return res;
    }
}
