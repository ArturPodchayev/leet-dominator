// O(n)
var reorderSpaces = function(text) {
    let spaces = 0;
    let words = 0;
    const arr = [];
    for (let w of text.split(' ')) {
        if (w === '') spaces++;
        else {
            words++;
            arr.push(w);
        }
    }
    let diff = words - 1;
    if (diff === 0) return arr[0] + ' '.repeat(spaces);
    spaces += diff;
    let div = Math.floor(spaces / diff);
    let rem = spaces % diff;
    return arr.join(' '.repeat(div)) + ' '.repeat(rem);
};
