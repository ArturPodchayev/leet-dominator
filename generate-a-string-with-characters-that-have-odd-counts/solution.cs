public class Solution {
    public string GenerateTheString(int n) 
    {
        int c=n;
        if(n%2==0)
        c=n-1;
        string s="";
        for(int i=0;i<c;i++)
            s=s+"a";
        if(n%2==0)
        s=s+"b";
        return s;
    }
}
