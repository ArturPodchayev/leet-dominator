public class Solution {
    public bool CanChange(string start, string target) {
        if (start.Replace("_", "") != target.Replace("_", "")) 
        {
            return false;
        }
        int j = 0;
        for(int i = 0; i < start.Length; i++)
        {
            if(start[i] == '_')
            {
                continue;
            }
            while(target[j] == '_')
            {
                j++;
            }
            if(start[i] == 'L' && i < j)
            {
                return false;
            }
            if(start[i] == 'R' && i > j)
            {
                return false;
            }
            j++;
        }
        return true;
    }
}
