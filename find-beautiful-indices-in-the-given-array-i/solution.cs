public class Solution {
    public IList<int> BeautifulIndices(string s, string a, string b, int k) {
                List<int> result = new List<int>();
            List<int> listA = new List<int>();
            int ai = 0;
            List<int> listB = new List<int>();
            int bi = 0;
            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == a[ai])
                {
                    ai++;
                    if (ai == a.Length)
                    {
                        listA.Add(i - a.Length + 1);
                        i = i - ai + 1;
                        ai = 0;
                    }
                }
                else if(ai>0)
                {
                    i = i - ai ;                        
                    ai=0;
                }
            }
            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == b[bi])
                {
                    bi++;
                    if (bi == b.Length)
                    {
                        listB.Add(i - b.Length + 1);
                        i = i - bi + 1;
                        bi = 0;
                    }
                }
                else if(bi>0)
                {
                    i = i - bi;                        
                    bi=0;
                }
            }
            for (int i = 0; i < listA.Count; i++)
            {
                for (int j = 0; j < listB.Count; j++)
                {
                    if (Math.Abs(listB[j] - listA[i]) <= k)
                    {
                        result.Add(listA[i]);
                        break;
                    }
                }
            }
            return result;
    }
}
