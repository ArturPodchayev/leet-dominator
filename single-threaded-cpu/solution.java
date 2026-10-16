class Solution {
    public int[] getOrder(int[][] tasks) {
     int n = tasks.length;
     int[] result = new int[n];

     int[][] sortedTasks = new int[n][3];
     for(int i = 0; i<n; i++){
        sortedTasks[i][0] = tasks[i][0];
        sortedTasks[i][1] = tasks[i][1];
        sortedTasks[i][2] = i;

     } 
     Arrays.sort(sortedTasks, (a,b) -> Integer.compare(a[0] , b[0]));
     PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> {
        if(a[1] != b[1]) {
            return Integer.compare(a[1] , b[1]);

        }
        return Integer.compare(a[2], b[2]);     });
     long currentTime = 0;
     int taskIdx = 0;
     int resIdx = 0;
     while(resIdx < n){
        if(pq.isEmpty() && currentTime < sortedTasks[taskIdx][0]){
            currentTime = sortedTasks[taskIdx][0];
        }
        while(taskIdx < n && sortedTasks[taskIdx][0] <= currentTime){
            pq.offer(sortedTasks[taskIdx]);
            taskIdx++;
        }
        int[] currentTask = pq.poll();
        currentTime += currentTask[1];
        result[resIdx++] = currentTask[2];
     }
     return result;
        
    }
}
