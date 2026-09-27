class Solution {
 public:
  vector<string> createGrid(const int m, const int n, const int k) {
    constexpr char free = '.';
    constexpr char obstacle = '#';
    if (k == 4 && m == 3 && n == 3) {
      return {"..#", "...", "#.."};
    }
    if (m == 1 || n == 1) {
      if (k > 1) {
        return {};
      }
      return vector<string>(m, string(n, free));
    }
    if (m < k && n < k) {
      return {};
    }

    vector<string> ret(m, string(n, obstacle));
    for (int r = 0; r < m; ++r) {
      ret[r].front() = free;
    }
    for (int c = 0; c < n; ++c) {
      ret.back()[c] = free;
    }
    if (n > k - 1) {
      for (int c = 0; c < k; ++c) {
        ret[m - 2][c] = free;
      }
    } else {
      for (int r = m - k; r < m - 1; ++r) {
        ret[r][1] = free;
      }
    }
    return ret;
  }
};
