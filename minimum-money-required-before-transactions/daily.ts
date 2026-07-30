function minimumPushes(word: string): number {
    const count: {[key: string]: number} = {};

    for (const char of word) {
        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    const sortedletters = Object.entries(count).sort((a, b)=> b[1] - a[1]);
    let pushes = 0;

    sortedletters.forEach(([_, freq], index)=> {
        if (index < 8) {
            pushes = pushes + freq;
        } 
        else if (index <16) {
            pushes = pushes + (freq*2);
        } 
        else if (index <24) {
            pushes = pushes + (freq*3);
        }
        else {
            pushes = pushes + (freq*4);
        }
    });
    return pushes;
}
