/**
 * Time Complexity: O(n * log(max_one))
 * Space Complexity: O(n)
 * where `n` is the length of the vector `nums`
 *       `max_one` is maximum sum of an subarrays whose length is in the range [l, r], both inclusive
 */
class Solution {
 private:
  /**
   * <first>: the sum of the non-overlapping subarrays
   * <sedond>: the number of the non-overlapping subarrays
   */
  using stat_t = pair<long long, int>;

  long long max_single_subarray(const long long *presums, const int n, const int l, const int r) {
    deque<long long> dq;
    long long ret = numeric_limits<long long>::min();
    for (int end = l; end < n + 1; ++end) {
      const int l_start = end - l;
      while (!dq.empty() && dq.back() > presums[l_start]) {
        dq.pop_back();
      }
      dq.emplace_back(presums[l_start]);
      if (end > r) {
        const int r_start = end - r - 1;
        if (dq.front() == presums[r_start]) {
          dq.pop_front();
        }
      }
      ret = max(ret, presums[end] - dq.front());
    }
    return ret;
  }

  stat_t better(const stat_t &lhs, const stat_t &rhs) {
    const auto [l_sum, l_n] = lhs;
    const auto [r_sum, r_n] = rhs;
    return l_sum > r_sum || (l_sum == r_sum && l_n < r_n) ? lhs : rhs;
  }

  stat_t calculate(const long long *presums, const int n, const int l, const int r, const long long cost) {
    long long dp_sum[n + 1];
    memset(dp_sum, 0, sizeof(dp_sum));
    int dp_n[n + 1];
    memset(dp_n, 0, sizeof(dp_n));
    deque<int> dq;
    for (int end = l; end < n +1; ++end) {
      dp_sum[end] = dp_sum[end - 1];
      dp_n[end] = dp_n[end - 1];
      const int l_start = end - l;
      const long long new_sum = dp_sum[l_start] - presums[l_start];
      const int new_n = dp_n[l_start];
      while (!dq.empty()) {
        const int old_index = dq.back();
        const long long old_sum = dp_sum[old_index] - presums[old_index];
        const int old_n = dp_n[old_index];
        if (!(new_sum > old_sum || (new_sum == old_sum && new_n <= old_n))) {
          break;
        }
        dq.pop_back();
      }
      dq.emplace_back(l_start);

      while (dq.front() < end - r) {
        dq.pop_front();
      }

      const int index = dq.front();
      const stat_t candidate{dp_sum[index] + presums[end] - presums[index] - cost, dp_n[index] + 1};
      const stat_t current{dp_sum[end], dp_n[end]};
      const stat_t best = better(current, candidate);
      dp_sum[end] = best.first;
      dp_n[end] = best.second;
    }
    return stat_t{dp_sum[n], dp_n[n]};
  }

 public:
  long long maximumSum(const vector<int> &nums, const int m, const int l, const int r) {
    const int n = static_cast<int>(nums.size());
    long long presums[n + 1];
    memset(presums, 0, sizeof(presums));
    for (int i = 0; i < n; ++i) {
      presums[i + 1] = presums[i] + nums[i];
    }

    const long long max_one = max_single_subarray(presums, n, l, r);
    if (max_one < 1) {
      return max_one;
    }

    long long low = 0;
    long long high = max_one;
    while (low < high) {
      const long long mid = low + ((high - low) >> 1);
      const auto [sum, number] = calculate(presums, n, l, r, mid);

      if (number > m) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    const auto [sum, number] = calculate(presums, n, l, r, high);
    return sum + high * m;
  }
};
