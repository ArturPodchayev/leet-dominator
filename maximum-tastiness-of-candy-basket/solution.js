/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(p, k) {
    // 1st sort the prices array
    p.sort((a,b)=>a-b) ; 
    // now lets create canPick function to scalte if desired, chosen count of k elements is less than k
    function canPick(mid){
        let count = 1, lPick = p[0] ;
        for(let i=0; i<p.length; i++){
            if(p[i] - lPick >= mid){
                lPick = p[i] ; 
                count ++;
                if(count >= k) return true;
            }
            
        }
        return false;
    }
    // 3rd last important part of solution, defining l, r and med vlaues 
    let l=0, r = p[p.length-1]-p[0], ans=0 ; 
    while (l<=r){
        let mid = Math.floor((l+r)/2) ; 
        if (canPick(mid)){
            l = mid+1;
            ans = mid;
        }else{
            r = mid-1;
        }
    }
    
    return ans;
};
