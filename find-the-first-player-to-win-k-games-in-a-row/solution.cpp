class Solution {
public:
    int findWinningPlayer(vector<int>& skills, int k) {
        
        int n = skills.size();
        
        int totalWins = 0 , playerIndex = 0;
        
        for(int i = 1 ; i < n ; i++) {
            
            if(skills[i] < skills[playerIndex]) totalWins++;
            else {
                totalWins = 1;
                playerIndex = i;
            }

            if(totalWins == k) return playerIndex;
        
        }
        
        return playerIndex;
        
        
    }
};
