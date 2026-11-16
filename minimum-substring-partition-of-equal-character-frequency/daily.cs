public class Solution {
    public string DigitSum(string s, int k) {
         while (s.Length > k)
        {
            List<string> str = new List<string>();
            for (int i = 0; i < s.Length; i = i + k)
            {
                int l = s.Length - i <= k ? s.Length - i : k;
                str.Add(s.Substring(i, l));
            }

            s = "";
            foreach (string sVal in str)
            {
                int sum = 0;

                for (int i = 0; i < sVal.Length; i++)
                {
                    sum= sum + Convert.ToInt32(sVal.Substring(i,1));
                }

                s = s + sum.ToString();
            }

        }
        return s;
    }
}
