public class Solution {
    public long ShiftDistance(string s, string t, int[] nextCost, int[] previousCost) 
    {
        // Instantiate answer variable
        long ans = 0;
        //Loop through each char
        for (int i = 0; i < s.Length; i ++)
        {
            // Keep variables to contain the total cost of transforming each individual char forwards and backwards
            long backwardCost = 0;
            long forwardCost = 0;

            // Create variables to hold the index position of the two current characters and calculate forward cost
            int j = s[i] - 97;
            int k = t[i] - 97;
            // Continue looping until the characters are equal
            while (j != k)
            {
                forwardCost += nextCost[j];
                j = (j + 1) % 26;
            }      
            // Repeat co calculate backward cost
            j = s[i] - 97;
            k = t[i] - 97;
            while (j != k)
            {
                backwardCost += previousCost[j];
                j = (j + 25) % 26;
            }
            //Add lowest cost to running total
            ans += Math.Min(backwardCost, forwardCost);
        }
        return ans;
    }
}
