/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const n = skill.length;
    if(n===1) {
        return -1;
    }
    if(n===2) {
        return skill[0] * skill[1];
    }
    skill.sort((a,b)=>a-b);
    let ch = 0;
    let sum;
    for(let i=0; i< Math.floor(n/2); i++) {
        const cur = skill[i] + skill[n-i-1];
        if(!sum) {
            sum = cur;
        }
        else {
            if(cur !== sum) {
                return -1;
            }
        }
        ch += skill[i] * skill[n-i-1];
    }
    return ch;
};
