public class Solution {
    public int MinNumberOfSemesters(int n, int[][] relations, int k) {
        // Step 1: Build prerequisites for each course
        int []prerequisit = new int[n];
        foreach(var rel in relations)
        {
            // relation [a,b] means: course a must be done before course b
            // so we set the bit for course a in prerequisit[b]
            prerequisit[rel[1]-1] |= 1 << (rel[0]-1);
        }

        // Step 2: DP array
        // dp[mask] = minimum semesters to finish courses in 'mask'
        int []dp = new int[1<<n];
        Array.Fill(dp, n+1); // initialize with large number
        dp[0] = 0; // base case: no courses done → 0 semesters

        int fullmask = (1<<n)-1; // target state: all courses done

        // Step 3: Iterate through all possible states
        for(int mask = 0; mask < fullmask; mask++)
        {
            if(dp[mask] > n) continue; // skip invalid states

            // Step 4: Find available courses
            int available = 0;
            for(int i = 0; i < n; i++)
            {
                // course i not yet taken AND all prerequisites satisfied
                if((mask & (1<<i)) == 0 && (mask & prerequisit[i]) == prerequisit[i])
                {
                    available |= (1<<i);
                }
            }

            // Step 5: Try all subsets of available courses (up to k)
            for(int sub = available; sub > 0; sub = (sub-1) & available)
            {
                if(CheckCount(sub) <= k)
                {
                    // New mask = old mask + chosen courses
                    dp[mask | sub] = Math.Min(dp[mask | sub], dp[mask] + 1);
                }
            }
        }

        // Step 6: Return answer
        return dp[fullmask];
    }

    // Helper: count how many courses are in a subset (bitmask)
    public int CheckCount(int sub)
    {
        int result = 0;
        while(sub > 0)
        {
            result += sub & 1; // add 1 if last bit is set
            sub >>= 1;         // shift right
        }
        return result;
    }
}
