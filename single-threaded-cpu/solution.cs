public class Solution {
    public int[] GetOrder(int[][] tasks) {
        int n = tasks.Length;
        PriorityQueue<int[], int[]> queue = new PriorityQueue<int[],int[]>(Comparer<int[]>.Create((a,b)=> a[1]!=b[1]?a[1]-b[1]:a[2]-b[2]));
        int[][] sortedTasks = new int[n][];
        for(int i = 0;i<n;i++)
        {
            sortedTasks[i] = new int[3];
            sortedTasks[i][0] = tasks[i][0];
            sortedTasks[i][1] = tasks[i][1];
            sortedTasks[i][2] = i;
        }
        Array.Sort(sortedTasks, (a,b)=> a[0]-b[0]);
        int[] ans = new int[n];
        int ansIndex = 0;
        int currentTime = 0;
        int index = 0;
        while(index<n || queue.Count>0)
        {
            if(queue.Count == 0 && currentTime<sortedTasks[index][0])
            {
                currentTime = sortedTasks[index][0];
            }

            while(index<n && sortedTasks[index][0]<=currentTime)
            {
                queue.Enqueue(new int[]{sortedTasks[index][0],sortedTasks[index][1], sortedTasks[index][2]}, new int[]{sortedTasks[index][0],sortedTasks[index][1], sortedTasks[index][2]});
                index++;
            }

            var temp = queue.Dequeue();
            ans[ansIndex++] = temp[2];

            currentTime += temp[1];
            
        }

        return ans;
    }
}
