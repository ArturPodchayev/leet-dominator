public class Solution {
    public int UniqueXorTriplets(int[] nums) {
        var set0 = new HashSet<int>(nums);
        var set1 = new HashSet<int>();
        foreach(var item in set0)
        {
            foreach (var item1 in set0)
            {
                set1.Add(item ^ item1);
            }
        }
        var set = new HashSet<int>();
        foreach (var item in set0)
        {
            foreach(var item1 in set1)
            {
                set.Add(item ^ item1);
            }
        }   
        var rs = set.Count;
        return rs;
    }
}
