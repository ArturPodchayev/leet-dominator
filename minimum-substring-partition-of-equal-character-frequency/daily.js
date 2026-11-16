/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    var result = recur(s, k);
    return result;
};

function recur(s, k){
    if(s.length <= k) return s;
    let sequence = 0;
    let end = false;
    let data = "";
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        sum += Number(s[i]);
        sequence += 1;
        if(sequence >= k) {
            end = s.length-1 == i;
            data += sum;
            sequence = 0;
            sum = 0;
        }
    }
    if(end == false)data += sum;
    return recur(data, k);
}
