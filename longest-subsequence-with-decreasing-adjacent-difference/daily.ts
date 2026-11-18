function minChanges(s: string): number {
  let count = 0;
  for (let i = 0; i + 1 < s.length; i += 2) {
    let zeros = 0;
    let ones = 0;

    if (s[i] === "0") {
      zeros++;
    } else {
      ones++;
    }

    if (s[i + 1] === "0") {
      zeros++;
    } else {
      ones++;
    }
    if (zeros == 0 && ones > 0) {
      continue;
    }
    if (ones == 0 && zeros > 0) {
      continue;
    }
    let res = Math.abs(ones - zeros);
    if (res == 0) {
      count += 1;
    } else {
      count += res;
    }
  }

  return count;
}
