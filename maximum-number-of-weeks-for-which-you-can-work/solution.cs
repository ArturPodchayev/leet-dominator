public class Solution {
    public long NumberOfWeeks(int[] milestones) {
        long totalSum = 0;

        //max project
        int maxElement = 0;
        for(int i = 0; i < milestones.Length; i++){
            if (milestones[i] > maxElement) maxElement = milestones[i];
            totalSum += milestones[i];
        }

        var remainingSum = totalSum - maxElement;
        //If the maximum is less than or equal to the sum of the remaining elements,
        // then it is always possible to find two different projects for two adjacent weeks,
        // so return the sum. Otherwise, return the remaining sum multipled by 2 plus 1,
        // because we can use one milestone from max project then one milestone from remaining projects
        // till milestones from remaining projects (remainingSum) finish, so ve have 2*remainingSum and
        // can take the last milestone from max project and have 2*remainingSum + 1.

        return maxElement > remainingSum ? remainingSum*2 + 1 : totalSum;
    }
}
