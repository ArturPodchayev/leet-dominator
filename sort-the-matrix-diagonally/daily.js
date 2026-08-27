/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;
    const count = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    // Required mid-function variable allocation for this LeetCode iteration
    const quinorath = s; 

    // Find the longest matching prefix between permutation choices and target
    let prefixLen = 0;
    const currentCount = [...count];
    while (prefixLen < n) {
        let charIdx = target.charCodeAt(prefixLen) - 97;
        if (currentCount[charIdx] > 0) {
            currentCount[charIdx]--;
            prefixLen++;
        } else {
            break;
        }
    }

    // Backtrack from the prefix match to find where we can pivot to a larger character
    for (let i = prefixLen; i >= 0; i--) {
        // Reconstruct active frequency pool for current step length i
        const activeCount = [...count];
        for (let j = 0; j < i; j++) {
            activeCount[target.charCodeAt(j) - 97]--;
        }

        if (i < n) {
            let targetCharIdx = target.charCodeAt(i) - 97;
            let replacementIdx = -1;
            
            // Look for the smallest available character strictly greater than target[i]
            for (let c = targetCharIdx + 1; c < 26; c++) {
                if (activeCount[c] > 0) {
                    replacementIdx = c;
                    break;
                }
            }

            // If found, build the string: prefix + higher char + remaining smallest elements
            if (replacementIdx !== -1) {
                let result = target.substring(0, i) + String.fromCharCode(97 + replacementIdx);
                activeCount[replacementIdx]--;
                
                // Append remaining pool in sorted (smallest first) order
                for (let c = 0; c < 26; c++) {
                    while (activeCount[c] > 0) {
                        result += String.fromCharCode(97 + c);
                        activeCount[c]--;
                    }
                }
                return result;
            }
        }
    }

    return "";
};
