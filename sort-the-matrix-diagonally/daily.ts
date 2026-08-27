let ans = '';

function dfs(path: string[], cnt: number[], target: string, big: boolean): boolean {
  const n = target.length;
  if (ans !== '') return true;

  if (path.length === n) {
    if (big) {
      ans = path.join('');
      return true;
    }
    return false;
  }

  const i = path.length;
  for (let c = 0; c < 26; c++) {
    if (cnt[c] === 0) continue;
    if (!big && String.fromCharCode(c + 97) < target[i]) continue;

    path.push(String.fromCharCode(c + 97));
    cnt[c]--;
    const newBig = big || String.fromCharCode(c + 97) > target[i];

    if (dfs(path, cnt, target, newBig)) return true;

    path.pop();
    cnt[c]++;
  }

  return false;
}

function lexGreaterPermutation(s: string, target: string): string {
  const cnt = new Array(26).fill(0);
  for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;
  ans = '';
  dfs([], cnt, target, false);
  return ans;
}
