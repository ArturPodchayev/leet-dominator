public class Solution {
    private bool IsSmaller(string s1, string s2)
    {
        int idx = 0;
        while(idx < s1.Length)
        {
            if(s1[idx] != s2[idx])
                return s1[idx] < s2[idx];

            idx++;
        }

        return false;
    }
    public string ShortestBeautifulSubstring(string s, int k) {
        Queue<int> que = new();
        int len = s.Length;
        if(len < k)
            return "";
        
        int[] sample = [-1, int.MaxValue];
        for(int i = 0; i < len; i++)
        {
            int num = s[i]-'0';
            if(num == 1)
            {
                que.Enqueue(i);
                if(que.Count == k)
                {
                    int pre = que.Dequeue();
                    int curLen = i-pre+1;
                    if(sample[1] > curLen)
                        sample = [pre, curLen];
                    else if(sample[1] == curLen && IsSmaller(s.Substring(pre, curLen), s.Substring(sample[0], curLen)))
                        sample[0] = pre;
                }
            }
        }

        if(sample[0] >= 0)
            return s.Substring(sample[0], sample[1]);

        return "";
    }
}
