function maxUniqueSplit(s) {
    function backtrack(start, uniqueSubstrings) {
       
        if (start === s.length) {
            return uniqueSubstrings.size;
        }
        
        let maxCount = 0;
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (!uniqueSubstrings.has(substring)) {
                uniqueSubstrings.add(substring);
                maxCount = Math.max(maxCount, backtrack(end, uniqueSubstrings));
                uniqueSubstrings.delete(substring);
            }
        }
        
        return maxCount;
    }
    
    return backtrack(0, new Set());
}

console.log(maxUniqueSplit("ababccc")); 
console.log(maxUniqueSplit("aba"));    
console.log(maxUniqueSplit("aa"));   
