class Solution
{
public:
    using u32 = uint32_t;
    inline static constexpr u32 kMOD = 1'000'000'007;

    [[nodiscard, gnu::target("bmi2,avx2")]] constexpr std::vector<int>
    pathsWithMaxScore(std::vector<std::string>& board) noexcept
    {
        const u32 h = static_cast<u32>(board.size()), h1 = h - 1;
        const u32 w = static_cast<u32>(board[0].size()), w1 = w - 1;
        u32 dp[100][2];

        auto f = [&] [[gnu::always_inline]] (u32 & s, u32 & p, u32 x, u32 y)
        {
            char c = board[y][x];
            bool is_obstacle = c == 'X';
            bool is_number = c >= '0' && c <= '9';
            s += ((c - '0') & -is_number) & 0xF;
            s &= -u32{!is_obstacle && !!p};
            p &= -u32{!is_obstacle};
        };

        // There is no number at the bottom right corner
        // and only one way to get there
        dp[w1][0] = 0, dp[w1][1] = 1;

        // handle the last row except bottom right cell
        for (u32 x = w1, sr = dp[x][0], pr = dp[x][1]; x--;)
        {
            auto& [s, p] = dp[x];
            f(s = sr, p = pr, x, h1);
            sr = s, pr = p;
        }

        // handle rows [0; h-1]
        for (u32 y = h1; y--;)
        {
            auto [s3, p3] = dp[w1];

            // handle last element
            f(dp[w1][0] = s3, dp[w1][1] = p3, w1, y);

            // base case y ∈ [0; h-1], x ∈ [0; w-1]
            for (u32 x = w1; x--;)
            {
                auto [s, p] = dp[x];
                auto [s1, p1] = dp[x + 1];
                auto [s2, p2] = dp[x];
                s = std::max(s1, std::max(s2, s3));
                p = (p1 & -u32{s == s1})
                  + (p2 & -u32{s == s2})
                  + (p3 & -u32{s == s3});
                p -= kMOD & -u32{p >= kMOD};
                p -= kMOD & -u32{p >= kMOD};
                f(s, p, x, y);
                s3 = dp[x][0], p3 = dp[x][1];
                dp[x][0] = s, dp[x][1] = p;
            }
        }

        return {static_cast<int>(dp[0][0]), static_cast<int>(dp[0][1])};
    }
};
