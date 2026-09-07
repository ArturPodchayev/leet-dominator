#include <string>
#include <vector>

class Solution {
public:
    int distinctSubseqII(std::string s) {
        long long mod = 1e9 + 7;
        // Stores the contribution of each character ('a' through 'z')
        std::vector<long long> last_contribution(26, 0);
        long long current_total = 0; // Total distinct subsequences excluding empty set

        for (char c : s) {
            int index = c - 'a';
            // New subsequences created by appending 'c' to all existing subsequences + 'c' itself
            long long new_subsequences = (current_total + 1) % mod;
            
            // Total = previous total + new unique contributions
            // We isolate the unique ones by subtracting the duplicates from 'c's last occurrence
            long long updated_total = (current_total + new_subsequences - last_contribution[index] + mod) % mod;
            
            // Update historical record for this character
            last_contribution[index] = new_subsequences;
            current_total = updated_total;
        }
        
        return current_total;
    }
};
