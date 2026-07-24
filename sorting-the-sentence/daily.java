class Solution {
    public int uniqueXorTriplets(int[] nums) {

        // Remove duplicates since only unique values affect the XOR results.
        Set<Integer> uniqueValues = new HashSet<>();

        for(int num:nums)
        {
            uniqueValues.add(num);
        }
        
        ///nums[i] <= 1500, so every XOR value lies in the range [0, 2047].
        final int MAX_XOR = 2048;

        boolean[] reachablePairXor = new boolean[MAX_XOR];
        boolean[] reachableTripletXor = new boolean[MAX_XOR];

        // Compute all XOR values obtainable using any two numbers.
        for(int first:uniqueValues)
        {
            for(int second:uniqueValues)
                reachablePairXor[first^second] = true;
        }

        //Extend every reachable pair XOR with a third number
        for(int xorValue = 0; xorValue < MAX_XOR; xorValue++)
        {
            if(!reachablePairXor[xorValue])
                continue;
            for(int third: uniqueValues)
                reachableTripletXor[xorValue^third] = true;
        }

        //Count all reachable triplet XOR values.
        int uniqueTriplets = 0;
        for(boolean reachable : reachableTripletXor)
        {
            if(reachable)
                uniqueTriplets++;
        }
        return uniqueTriplets;
    }
}
