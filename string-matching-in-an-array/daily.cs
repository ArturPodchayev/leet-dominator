public class Solution {
    public string ProcessStr(string s) {
        bool _order = false; // fasle -> left, true -> right
        StringBuilder stb = new StringBuilder();

        foreach(char ch in s){
            switch(ch){
                case '#' : stb.Append(stb); break;
                case '%' : _order = !_order; break;
                case '*' : if(stb.Length!=0)
                    {
                        if(_order) stb.Remove(0, 1);
                        else stb.Remove(stb.Length-1, 1);
                    } break;
                default : if (_order && stb.Length>0) stb.Insert(0, ch); else stb.Append(ch); break;
            }
        }

        if(_order) stb.Reverse();
        return stb.ToString();
    }
}

public static class StringBuilderExtensions{
    public static StringBuilder Reverse(this StringBuilder sb){
        if (sb == null) return null;
        
        int start = 0;
        int end = sb.Length - 1;

        while (start < end)
        {
            char temp = sb[start];
            sb[start] = sb[end];
            sb[end] = temp;
            start++;
            end--;
        }
        return sb;
    }
}
