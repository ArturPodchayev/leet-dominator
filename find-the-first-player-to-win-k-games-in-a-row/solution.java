class Solution {
    public int findWinningPlayer(int[] skills, int k) {
        int winCount=0;
        int winIdx=0;
        for(int i=1;i<skills.length;i++){
            // assume 1st elemnt is winner and check next elemt is leess than and increment 1 
            if(skills[winIdx]>skills[i]){
                winCount++;
            }
            // else update the idx and count of wins
            else {
                winCount=1;
                winIdx=i;
            }
            // check winnercount==K then return it
            if(winCount==k){
                return winIdx;
            }
        }
        // if k >= n, the max skill player will eventually win
        int maxIdx = 0;
        for (int i = 1; i < skills.length; i++) {
            if (skills[i] > skills[maxIdx]) maxIdx = i;
        }
        return maxIdx;
    }
}
