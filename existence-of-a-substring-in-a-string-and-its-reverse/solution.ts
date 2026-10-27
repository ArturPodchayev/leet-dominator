function isSubstringPresent(s: string): boolean {
    const s2 = s.split("").reverse().join("");

    for (let i = 0; i < s.length - 1; i++) {
      let j = i + 1;
      let sub = `${s[i]}${s[j]}`;
      if (s2.includes(sub)) {
        return true;
      }
    }

    return false;
};
