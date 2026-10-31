class Solution
{
public:
    using u32 = uint32_t;
    inline static u32 dp[501];
    inline static constexpr u32 kMod = 1'000'000'007;

    [[nodiscard, gnu::no_sanitize_address, gnu::flatten]]
    u32 uniquePaths(const std::vector<std::vector<int>>& g) const noexcept
    {
        const u32 w1 = 1u + g[0].size() & ~u32{};

        [[assume(w1 <= 501)]];

        std::memset(dp, 0, sizeof(dp[0]) * w1);

        dp[1] = 1;
        u32 min_x = 1;

        const auto* rows = g.data();
        const auto* rows_end = rows + g.size();
        for (; rows != rows_end; ++rows)
        {
            const auto* row_data = rows->data();
            u32 left = 0;
            for (u32 x = min_x; x != w1; ++x)
            {
                u32 top = dp[x];
                u32 m = static_cast<u32>(row_data[x - 1]) - 1u;
                u32 down = left + (top & m);
                u32 right = top + (left & m);
                dp[x] = down - (kMod & -u32{down >= kMod});
                left = right - (kMod & -u32{right >= kMod});
            }
            min_x += (!!row_data[min_x - 1]) & (min_x + 1 != w1);
        }

        return dp[w1 - 1];
    }
};
