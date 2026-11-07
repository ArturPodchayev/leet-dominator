public class Solution {
    public int[] AssignTasks(int[] servers, int[] tasks) {
        //weight, index
        PriorityQueue<int[], int[]> free = new PriorityQueue<int[], int[]>(Comparer<int[]>.Create((a,b)=> a[0]==b[0]?a[1]-b[1]:a[0]-b[0]));
        //time, index
        PriorityQueue<int[], int[]> busy = new PriorityQueue<int[], int[]>(Comparer<int[]>.Create((a,b)=> a[0]-b[0]));

        for(int i = 0;i<servers.Length;i++)
        {
            var temp = new int[]{servers[i], i};
            free.Enqueue(temp, temp);
        }

        int[] ans = new int[tasks.Length];
        int time = 0;
        for(int i = 0;i<tasks.Length;)
        {
            while(busy.Count>0 && busy.Peek()[0]<=time)
            {
                var temp = busy.Dequeue();
                var freeEntry = new int[]{servers[temp[1]], temp[1]};
                free.Enqueue(freeEntry, freeEntry);
            }
            while(i<tasks.Length && i<=time && free.Count>0)
            {
                var temp = free.Dequeue();
                var busyEntry = new int[]{time+tasks[i], temp[1]};
                busy.Enqueue(busyEntry, busyEntry);
                ans[i++] = temp[1];
            }
            if(free.Count == 0) time = busy.Peek()[0];
            else time++;
        }

        return ans;
    }
}
