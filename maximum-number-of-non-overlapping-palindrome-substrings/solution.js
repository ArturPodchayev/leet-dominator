/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    let ans = 0 
	
    const isPalindrome = (str) => {
        let start = 0
        let end = str.length - 1
        while (start < end) {
            if (str[start] !== str[end]) return false
            start++
            end--
        }
        return true
    }
    
    let len = s.length
    let i = 0
    
    while (i + k <= len) {
        let step = 1
        if (isPalindrome(s.substring(i, i + k) )) {
            ans++
            step = k
        } else if (i + k + 1 <= len) {
            if (isPalindrome(s.substring(i, i + k + 1))) {
                ans++
                step = k + 1
            } 
        }
        i += step
    }
    return ans
};
