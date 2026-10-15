class Solution {
 private:
  static constexpr int mod = 1000000007;

 public:
  int countStableSubsequences(const vector<int> &nums) {
    int even1 = 0;
    int even2 = 0;
    int odd1 = 0;
    int odd2 = 0;

    for (const int num : nums) {
      if ((num & 1) == 0) {
        const int next_even1 = add(add(even1, odd1), add(odd2, 1));   // even1 + odd1 + odd2 + 1
        const int next_even2 = add(even1, even2);   // even1 + even2
        even1 = next_even1;
        even2 = next_even2;
      } else {
        const int next_odd1 = add(add(odd1, even1), add(even2, 1));   // odd1 + even1 + even2 + 1
        const int next_odd2 = add(odd1, odd2);   // odd1 + odd2
        odd1 = next_odd1;
        odd2 = next_odd2;
      }
    }
    return add(add(even1, even2), add(odd1, odd2));
  }

 private:
  int add(const int a, const int b) {
    return (a + b) % mod;
  }
};
