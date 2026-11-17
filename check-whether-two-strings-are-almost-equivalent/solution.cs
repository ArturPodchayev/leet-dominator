public class Solution {
    public bool CheckAlmostEquivalent(string word1, string word2) {
        Dictionary<char,int> a=new Dictionary<char,int>();
        Dictionary<char,int> b=new Dictionary<char,int>();
        foreach(var c in word1)
        {
            if(!a.ContainsKey(c))
            {
                a.Add(c,1);
            }
            else
            {
                a[c]++;
            }
        }
        foreach(var c in word2)
        {
            if(!b.ContainsKey(c))
            {
                b.Add(c,1);
            }
            else
            {
                b[c]++;
            }
        }
        foreach(var i in word1)
        {
            if(b.ContainsKey(i))
            {
            if(Math.Abs(a[i]-b[i])>3)
            {
                return false;
            }}
            else if(a[i]>3)
            {
                return false;
            }
        }
        foreach(var i in word2)
        {
            if(a.ContainsKey(i))
            {
            if(Math.Abs(a[i]-b[i])>3)
            {
                return false;
            }}
            else if(b[i]>3)
            {
                return false;
            }
        }
        return true;
    }
}
