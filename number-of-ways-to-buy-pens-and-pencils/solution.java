class Solution {
    public long waysToBuyPensPencils(int total, int cost1, int cost2) {
        
        long mam = 0 ;

        mam += (total / cost2 ) + 1 ;
        
        while(total > 0){
            total = total - cost1 ;

            if(total < 0 ){
                break ;
            }

            else if(total == 0){
                mam += 1 ;
                break;
            }
            
            mam += (total / cost2 ) + 1 ;

        }

        return mam ;
    }
}
