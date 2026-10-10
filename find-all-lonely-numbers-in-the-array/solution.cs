public class Solution {
    public IList<int> FindLonely(int[] nums) {
        var list = new List<int>();
        var freq = new Dictionary<int, int>();
        foreach(var num in nums) {
            if(!freq.ContainsKey(num))
                freq[num] = 0;
            
            freq[num]++;
        }

        foreach(var num in nums) {
            if(freq[num] == 1 && !freq.ContainsKey(num - 1) && !freq.ContainsKey(num + 1))
                list.Add(num);
        }

        return list;
    }
}
