public class Solution {
    public int FindWinningPlayer(int[] skills, int k) {
        LinkedList<int> list = new();
        int n = skills.Length;
        for(int i=0; i<n; i++)
        {
            list.AddLast(i);
        }
        Dictionary<int,int> map = new();
        while(n>0)
        {
            int first=list.First.Value;
            list.RemoveFirst();
            int second=list.First.Value;
            list.RemoveFirst();
            int winner=first;
            int loser=second;
            if(skills[first]<skills[second])
            {
                winner = second;
                loser=first;
            }
            if(!map.ContainsKey(winner))map[winner]=0;
            map[winner]++;
            if(map[winner]==k) return winner;
            list.AddFirst(winner);
            list.AddLast(loser);
            n--;
        }
        
        int imax=-1, max=0;
        for(int i=0; i<skills.Length; i++)
        {
            if(skills[i]>max)
            {
                max=skills[i];
                imax=i;
            }
        }
        return imax;
    }
}
