public class Solution {
    public int FirstMatchingIndex(string s) 
    {
        int min=99999;
        for(int i=0,j=s.Length-1;i<=j;i++,j--)
        {
            if(s[i]==s[j])
            {
                if(i<min)
                min=i;
            }
        }
        if(min==99999)
        return -1;
        return min;
        
    }
}
