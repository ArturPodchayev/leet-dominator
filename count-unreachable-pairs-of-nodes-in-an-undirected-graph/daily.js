function smallestNumber(numStr, t) {
  // map primes 2,3,5,7 → indices 0,1,2,3
  const PRIMES = [2,3,5,7];
  // digitPF[d] = [#2, #3, #5, #7] contributed by digit d
  const digitPF = [
    [0,0,0,0], //0
    [0,0,0,0], //1
    [1,0,0,0], //2
    [0,1,0,0], //3
    [2,0,0,0], //4
    [0,0,1,0], //5
    [1,1,0,0], //6
    [0,0,0,1], //7
    [3,0,0,0], //8
    [0,2,0,0]  //9
  ];

  // 1) factorize t into counts of 2,3,5,7; return null if any other prime
  function factorizeT(x) {
    const cnt = [0,0,0,0];
    for (let i = 0; i < 4; i++) {
      const p = PRIMES[i];
      while (x % p === 0) {
        cnt[i]++; x /= p;
      }
    }
    return x === 1 ? cnt : null;
  }

  // 2) Greedy allocate from a factor‐vector → digit frequencies 9→2
  function allocate(rem) {
    const freq = Array(10).fill(0);
    const avail = rem.slice(); // copy
    for (let d = 9; d >= 2; d--) {
      const pf = digitPF[d];
      // compute max times we can use digit d
      let m = Infinity;
      for (let k = 0; k < 4; k++) {
        if (pf[k] > 0) {
          m = Math.min(m, Math.floor(avail[k] / pf[k]));
        }
      }
      if (!isFinite(m) || m <= 0) continue;
      freq[d] = m;
      for (let k = 0; k < 4; k++) {
        if (pf[k] > 0) avail[k] -= pf[k] * m;
      }
    }
    return freq;
  }

  // 3) Sum up freq[d] *counts* for d in [2..9]
  function sumFreq(freq) {
    let s = 0;
    for (let d = 2; d <= 9; d++) s += freq[d];
    return s;
  }

  // 4) Build a result string given digit‐freq and total length
  //    (pads with '1's to fill out length)
  function buildFrom(freq, totalLen) {
    const used = sumFreq(freq);
    const ones = Math.max(0, totalLen - used);
    let out = '1'.repeat(ones);
    for (let d = 2; d <= 9; d++) {
      if (freq[d]) out += String(d).repeat(freq[d]);
    }
    return out;
  }

  // main
  const need = factorizeT(t);
  if (!need) return "-1";

  const n = numStr.length;
  const digits = Array.from(numStr, ch => ch.charCodeAt(0) - 48);
  let firstZero = numStr.indexOf('0');

  // build running total for the entire string
  const running = [0,0,0,0];
  for (let d of digits) {
    const pf = digitPF[d];
    for (let k = 0; k < 4; k++) running[k] += pf[k];
  }

  // if no zeros and we already cover need, return original
  let covers = true;
  if (firstZero < 0) {
    for (let k = 0; k < 4; k++) {
      if (running[k] < need[k]) { covers = false; break; }
    }
    if (covers) return numStr;
  }

  // try bumping
  // at each i we drop digit[i] from running, then try candidates
  for (let i = n - 1; i >= 0; i--) {
    // never pivot to the right of the first '0'
    if (firstZero >= 0 && i > firstZero) {
      // just drop its contribution and continue
      const pf = digitPF[digits[i]];
      for (let k = 0; k < 4; k++) running[k] -= pf[k];
      continue;
    }

    // remove the old digit’s factors
    const oldPF = digitPF[digits[i]];
    for (let k = 0; k < 4; k++) running[k] -= oldPF[k];

    const slots = n - 1 - i;
    // try every larger digit
    for (let cand = digits[i] + 1; cand < 10; cand++) {
      // compute remNeed = need – running – candPF, clamp at 0
      const remNeed = [0,0,0,0];
      const cPF = digitPF[cand];
      for (let k = 0; k < 4; k++) {
        const v = need[k] - running[k] - cPF[k];
        remNeed[k] = v > 0 ? v : 0;
      }

      // allocate suffix
      const freq = allocate(remNeed);
      if (sumFreq(freq) <= slots) {
        // build and return
        const prefix = numStr.slice(0, i) + cand;
        const suffix = buildFrom(freq, slots);
        return prefix + suffix;
      }
    }
  }

  // fallback: lengthen by 1
  const baseFreq = allocate(need);
  return buildFrom(baseFreq, n + 1);
}
