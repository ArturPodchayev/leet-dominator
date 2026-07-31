/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
function convertKey(key) {
	let newKey = "";
	for (const letter of key) {
		if (letter === ' ') continue;
		if (newKey.includes(letter) === false) newKey += letter;
	}
	return newKey;
}

var decodeMessage = function (key, message) {
	key = convertKey(key);
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	for (const letter of message) {
		let index = key.indexOf(letter);
		if (index === -1) result += ' ';
		else result += alphabet[index];
	}
	return result;
};
