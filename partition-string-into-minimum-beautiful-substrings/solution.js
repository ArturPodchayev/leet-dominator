/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function(s) {
    function _isPowerOf5(num) {
        while(num > 1 && num % 5 === 0) num /= 5 
        return num === 1
    }

    function _solve(idx, partition) {
        if(idx == s.length) return partition
        if(s.charAt(idx) == '0') return Infinity
        let num = 0, res = Infinity
        for(let j = idx; j < s.length; j++) {
            num = (num << 1) + +s.charAt(j)
            if(_isPowerOf5(num)) res = Math.min(res, _solve(j+1, partition+1))
        }
        return res
    }

    const x = _solve(0, 0)
    return x === Infinity ? -1 : x
};
