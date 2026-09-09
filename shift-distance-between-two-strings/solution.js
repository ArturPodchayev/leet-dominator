/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function(s, t, nextCost, previousCost) {
    let alphabets = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let response = 0, cache = {};
    
    for(let i=0; i<s.length; i++){
        if(s[i]===t[i])
            continue;
        let key = `${s[i]},${t[i]}`;
        if(cache[key]!==undefined){
            response += cache[key];
            continue;
        }
        let tempAns = Math.min(calculateNextCost(s[i], t[i]), calculatePrevCost(s[i], t[i]));
        cache[key] = tempAns;
        response+=tempAns;
    }

    return response;
    
    function calculateNextCost(from, to){
        let fromIndex = alphabets.indexOf(from);
        let toIndex = alphabets.indexOf(to);
        let ans = 0;
        while(fromIndex!==toIndex){
            ans+= nextCost[fromIndex];
            fromIndex++;
            if(fromIndex===26)
                fromIndex = 0;
        }
        return ans;
    }
    function calculatePrevCost(from, to){
        let fromIndex = alphabets.indexOf(from);
        let toIndex = alphabets.indexOf(to);
        let ans = 0;
        while(fromIndex!==toIndex){
            ans+= previousCost[fromIndex];
            fromIndex--;
            if(fromIndex===-1)
                fromIndex = 25;
        }
        return ans;
    }
};
