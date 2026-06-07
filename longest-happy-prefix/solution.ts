function longestPrefix(s: string): string {
	const prefixTable: number[] = new Array(s.length + 1).fill(0);
	prefixTable[0] = -1;
	let k = -1;

	for (let i = 1; i <= s.length; i++) {
		while (k >= 0 && s[k] !== s[i - 1]) k = prefixTable[k];
		prefixTable[i] = ++k;
	}

	return s.substring(0, prefixTable[s.length]);
};
