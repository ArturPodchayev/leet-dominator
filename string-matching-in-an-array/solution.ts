function stringMatching(words: string[]): string[] {
    let res: string[] = [];
    for (let i = 0; i < words.length; i++) {
        words.forEach((itm, idx) => {
            if (i !== idx && itm.includes(words[i])) {
                res.push(words[i]);
                return;
            }
        })
    }
    return [...new Set(res)];
};
