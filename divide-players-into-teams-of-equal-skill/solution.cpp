class Solution {
public:
    long long dividePlayers(vector<int>& skill) {
        
        long long ans = 0 ;
        int n = skill.size() ;
        
        // skill = [3,4]
        if( skill.size() == 3 ) return skill[0]*skill[1] ;
        // sort the skills 
        sort( skill.begin(), skill.end() );
        
        int i=n/2-1 ;
        int j=n/2 ;
        int sum = skill[i]+ skill[j];
        
        while( i>=0 && j<n ){
            
            int tmp = skill[i] + skill[j] ;
            
            // It is necessary to divide all the teams equally 
            if( tmp == sum ){
                // Calculate the chemistry 
                ans += skill[i]*skill[j] ;
            }
            else {
                // If we are not able to divide the teams equally 
                ans = 0;
                break ;
            }
            
            i--;
            j++;
        }
        
        if( ans == 0 ) return -1 ;
        
        return ans ;
    }
};
