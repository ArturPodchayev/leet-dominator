function countOfSubstrings(word: string, k: number): number {

    return helper(word, k) - helper(word, k + 1);
};



function helper (word: string, k: number): number {
    let set = new Set<string>(['a', 'e', 'i', 'o', 'u']);
    let map = new Map<string, number>();
    let consonantCount: number = 0;
    let res: number = 0;
    let l: number = 0;

    for (let r = 0; r < word.length; r++) {

        if (set.has(word[r])) {
            map.set(word[r], (map.get(word[r]) || 0) + 1);
        } else {
            consonantCount++;
        }

        while (map.size === 5 && consonantCount >= k) {
            res += word.length - r;

            let leftChar: string = word[l];

            if (set.has(leftChar)) { 
                if (map.get(leftChar) === 1) {
                    map.delete(leftChar);
                } else {
                    map.set(leftChar, map.get(leftChar) - 1);
                }
            } else {
                consonantCount--;
            }

            l++;
        }
    }
    return res;
}
