class Solution {
    public double averageWaitingTime(int[][] customers) {
        int m = customers.length;

        long waitingTime = customers[0][1]; 
        long time = customers[0][0] + customers[0][1];

        for (int i = 1; i < m; i++) {
            long f = time - customers[i][0];

            if (f >= 0) {
                waitingTime += f + customers[i][1];
                time += customers[i][1];
            } else {
                waitingTime += customers[i][1];
                time = customers[i][0] + customers[i][1];
            }
        } 

        return waitingTime / (m * 1.0);
    }
}
