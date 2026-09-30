public class Solution {
    private static int Solve(IEnumerable<int> indexes, int k) {
        int result = 0;
        int current = k;

        LinkedList<int> agenda = new LinkedList<int>();

        foreach (int index in indexes) {
            if (agenda.AddLast(index).Previous is not null)
                current -= agenda.Last.Value - agenda.Last.Previous.Value - 1;

            for (;current < 0; agenda.RemoveFirst()) 
                current += agenda.First.Next.Value - agenda.First.Value - 1;
             
            result = Math.Max(result, agenda.Count);    
        }

        return result;
    } 

    public int LongestEqualSubarray(IList<int> nums, int k) => nums
        .Select((item, index) => (item, index))
        .GroupBy(pair => pair.item, pair => pair.index) 
        .Max(group => Solve(group, k));
}
