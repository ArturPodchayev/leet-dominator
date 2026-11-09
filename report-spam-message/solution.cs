public class Solution {
    public bool ReportSpam(string[] message, string[] bannedWords) {
        var dict = new Dictionary<string, int>();
        var count = 0;
        foreach(var b in bannedWords){
            if(!dict.ContainsKey(b))
                dict.Add(b, 0);
            dict[b]++;
        }
            
        foreach(var m in message){
            if(dict.ContainsKey(m))
                count++;
            if(count > 1)
                return true;
        }
        return false;
    }
}
