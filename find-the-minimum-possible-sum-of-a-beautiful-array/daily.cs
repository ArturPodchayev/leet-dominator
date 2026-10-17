public class Solution {
    public class PComp : IComparer<Points>
    {
        public int Compare(Points a, Points b)
        {
            if(a.DigSum != b.DigSum)
                return a.DigSum > b.DigSum ? 1 : -1;

            return a.Val.CompareTo(b.Val);
        }
    }
    public class Points
    {
        public int Idx;
        public int DigSum;
        public int Val;

        private int SumDigits(int num)
        {
            int sum = 0;
            while(num > 0)
            {
                sum += num%10;
                num /= 10;
            }

            return sum;
        }

        public Points(int in_idx, int in_val)
        {
            Idx = in_idx;
            Val = in_val;
            DigSum = SumDigits(in_val);
        }
    }
    public int MinSwaps(int[] nums) {
        int len = nums.Length, res = 0;
        if(len < 2)
            return 0;

        List<Points> p = new List<Points>();
        for(int i = 0; i < len; i++)
        {
            Points curP = new Points(i, nums[i]);
            p.Add(curP);
        }
        p.Sort(new PComp());
        HashSet<int> visited = new();

        for (int i = 0; i < len; i++)
        {
            int oldId = p[i].Idx;
            if (oldId == i || visited.Contains(oldId))
                continue;

            int preCnt = visited.Count;

            while (oldId != i)
            {
                visited.Add(oldId);
                oldId = p[oldId].Idx;
            }

            res += (visited.Count - preCnt);
            visited.Add(i);
        }
        
        return res;
    }
}
