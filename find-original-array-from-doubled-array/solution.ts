function findOriginalArray(changed: number[]): number[] {
    // If length is odd, return [], 
    // because it's not possible to form an array
    if(changed.length % 2 !== 0) return [];
    
    // We don't want to modify original array
    const copy = [...changed];
    
    copy.sort((a, b) => a - b);
    
    const numbers = new Map<number, number>();
    const result = [];
    
    for(let num of copy) {
        const division = num / 2;
        
        // If division is not present in numbers,
        // just add this number.
        if(!numbers.has(division)) {
            numbers.set(num, numbers.has(num) ? numbers.get(num) + 1 : 1);
        } else {
            // Otherwise
            // Add it to result
            result.push(division);
            
            // Get new division count
            const newDivisionCount = numbers.get(division) - 1;
            
            // Decrease division count in the map
            if(newDivisionCount > 0) {
                numbers.set(division, newDivisionCount);
            } else {
                // ... or delete it
                numbers.delete(division);
            }
        }
    }
    
    // If some numbers are left, result is inconsistent.
    // Return []
    return numbers.size === 0 ? result : [];
};
