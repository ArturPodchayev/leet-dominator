/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const n = word.length;
    let pushes = 0;
    for(let i = 0; i < n; i++){
        if(i < 8) {
            pushes++;
            continue;
        }
        if(i < 16) {
            pushes+=2;
            continue;
        }
        if(i < 24) {
            pushes+=3;
            continue;
        }
        pushes+=4;
    }

    return pushes;
};
