class Solution {
    public int partitionDisjoint(int[] A) {
        int leftLength = 1;
        int leftMax = A[0], max = A[0];
        
        for (int i = 1; i < A.length; ++i) {
            if (leftMax > A[i]) {
                leftLength = i + 1;
                leftMax = max;
            } else {
                max = max > A[i] ? max : A[i];
            }
        }
        
        return leftLength;
    }
}
