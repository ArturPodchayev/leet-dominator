public class Solution {
    public long DividePlayers(int[] skill) {
        int len = skill.Length;
        int sum = 0;
        Dictionary<int,int> dict = new();
        foreach(var s in skill){
            sum += s;
            if(!dict.ContainsKey(s))
                dict.Add(s,0);
            dict[s]++;
        }
        if(sum % (len/2) !=0)
            return -1;
        int pair = sum / (len/2);

        long res = 0;
        foreach(var s in skill){
            if(dict[s] <= 0)
                continue;
            int rem = pair - s;
            if(!dict.ContainsKey(rem) || dict[rem] <= 0)
                return -1;
            res +=(long) rem * s;
            dict[s]--;
            dict[rem]--;
        }
        return res;
    }
}
