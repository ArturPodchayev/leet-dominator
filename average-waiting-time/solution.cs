public class Solution {
    public double AverageWaitingTime(int[][] customers) {
        int currentTime = customers[0][0];
        double avg = 0;
        for (int i = 0; i < customers.Length; i++)
        {
           if (currentTime < customers[i][0])
           {
                currentTime = customers[i][0] + customers[i][1];
                avg += currentTime - customers[i][0];
           }
           else
           {
                currentTime += customers[i][1];
                avg +=  currentTime - customers[i][0];
           }
        }
        return avg/customers.Length;
    }
}
