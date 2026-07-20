function maxUniqueSplit(s: string): number {
    let uniqueSubstrings: Set<string> = new Set();

    function solve(s: string, currentIndex: number, prevIndex: number): number {
        if (currentIndex === s.length) return 0;
        
        // Option to skip the current character
        let skipCurrent: number = solve(s, currentIndex + 1, prevIndex);
        
        // Generate substring from previous index to current index
        let currentSubstring: string = s.slice(prevIndex, currentIndex + 1);
        
        // If substring is already in the set, skip it
        if (uniqueSubstrings.has(currentSubstring)) return skipCurrent;
        
        uniqueSubstrings.add(currentSubstring);
        
        // Option to include the current substring and solve for the next part
        let includeCurrent: number = Math.max(skipCurrent, 1 + solve(s, currentIndex + 1, currentIndex + 1));
        
        uniqueSubstrings.delete(currentSubstring);  // Backtrack
        return includeCurrent;
    }
    
    return solve(s, 0, 0);
};
