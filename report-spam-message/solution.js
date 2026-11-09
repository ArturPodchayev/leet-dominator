/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    const bannedWordsSet = new Set(bannedWords)

    let count = 0

    for(let el of message){
        if(bannedWordsSet.has(el)){
            count++
        }
    }

    return count > 1
};
