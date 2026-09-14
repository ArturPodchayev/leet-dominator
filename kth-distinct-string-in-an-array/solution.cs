public class Solution {
    public string KthDistinct(string[] arr, int k) {
        Dictionary<string,int> dict = new();
        string res = "";
        foreach(var ch in arr)
        {
            if(dict.ContainsKey(ch))
            dict[ch]++;
            else
            dict[ch] =1;
        }
        int count = 0;
       foreach(var ch in arr)
        {
            if(dict[ch] == 1)
            {
                count+=1;
            }
            if(count == k)
            {
           res = ch;
        break;
            }
             
        }
        return res;
    }
}
