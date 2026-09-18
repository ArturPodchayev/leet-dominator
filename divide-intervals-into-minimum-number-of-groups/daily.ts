function maxNumOfSubstrings(s: string): string[] {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [i, i])
        } else {
            map.get(s[i])[1] = i
        }
    }

    const intervals = []
    for (let i = 97; i < 97 + 26; i++) {
        const char = String.fromCharCode(i)
        
        if (!map.has(char)) {
            continue
        }
        
        let [min, max] = map.get(char)
        if (min === max) {
            intervals.push([min, max])
            continue
        }

        for (let j = min; j < max; j++) {
            if (map.get(s[j])[0] < min) {
                min = Infinity
                break
            }
            max = Math.max(max, map.get(s[j])[1])
        }
        
        if (max >= min) {
            intervals.push([min, max])        
        }
    }
    
    intervals.sort((a, b) => a[1] - b[1])
    
    const winners = []
    let [start, end] = intervals[0]
    for (const [currStart, currEnd] of intervals.slice(1)) {
        if (currStart > end) {
            winners.push([start, end])
            start = currStart
            end = currEnd
        } else if (currEnd === end && currStart > start) {
            start = currStart
            end = currEnd
        }
    }

    return winners.concat([[start, end]]).map(([start, end]) => s.slice(start, end + 1))    
};
