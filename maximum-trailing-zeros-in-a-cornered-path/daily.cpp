#include <vector>

class Solution {
private:
    long long mod = 1e9 + 7;
    std::vector<std::vector<long long>> table;

    // Precompute Pascal's Triangle for Combinations C(n, k)
    void precomputeCombinations(int n) {
        table.assign(n + 1, std::vector<long long>(n + 1, 1));
        for (int i = 1; i <= n; ++i) {
            table[i][0] = 1;
            for (int j = 1; j < i; ++j) {
                table[i][j] = (table[i - 1][j - 1] + table[i - 1][j]) % mod;
            }
        }
    }

    long long dfs(const std::vector<int>& nums) {
        if (nums.size() <= 2) return 1;

        std::vector<int> left, right;
        int root = nums[0];

        // Partition elements into left and right subtrees
        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] < root) {
                left.push_back(nums[i]);
            } else {
                right.push_back(nums[i]);
            }
        }

        int l_size = left.size();
        int r_size = right.size();

        // Calculate total ways using interleaving combinations
        long long left_ways = dfs(left);
        long long right_ways = dfs(right);
        long long interleaving_ways = table[l_size + r_size][l_size];

        return (((interleaving_ways * left_ways) % mod) * right_ways) % mod;
    }

public:
    int numOfWays(std::vector<int>& nums) {
        int n = nums.size();
        precomputeCombinations(n);
        
        // Subtract 1 to exclude the original array permutation
        return (dfs(nums) - 1 + mod) % mod;
    }
};
