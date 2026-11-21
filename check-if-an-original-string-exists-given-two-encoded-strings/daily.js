/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function (parent, s) {
  const p = [];
  for (let i = 0; i < parent.length; i++) {
    let par = parent[i];
    let isFond = false;
    while (1) {
      if (par === -1) break;
      if (s[par] === s[i]) {
        isFond = true;
        break;
      }
      par = parent[par];
    }
    if (isFond) {
      p[i] = par;
    } else {
      p[i] = parent[i];
    }
  }
  const tree = Array.from({ length: p.length }, () => []);
  for (let i = 1; i < p.length; i++) {
    const val = p[i];
    tree[val].push(i);
  }
  const result = [];
  const dfs = (node) => {
    let count = 1;
    for (let i = 0; i < tree[node].length; i++) {
      count += dfs(tree[node][i]);
    }
    result[node] = count;
    return count;
  };
  dfs(0);

  return result;
};
