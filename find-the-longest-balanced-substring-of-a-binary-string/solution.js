/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let zeros=0,ones=0,len=0;

    for(let j=0;j<s.length;j++){
        if(s[j]=='0'){
            if(ones>0){
                len=Math.max(Math.min(ones,zeros),len)
                ones=0
                zeros=1
            }else{
            zeros++
            }
        }else{
            ones++
        }
    
    }
    len=Math.max(Math.min(ones,zeros),len)

    return len*2
};
