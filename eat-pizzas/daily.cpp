template <typename To>
inline static constexpr auto cast =
    []<typename From> [[nodiscard, gnu::always_inline]] (From&& v) noexcept
{
    return static_cast<To>(std::forward<From>(v));
};


using u8 = uint8_t;
using u16 = uint16_t;
using u32 = uint32_t;
using u64 = uint64_t;

inline constexpr u32 kMOD = 1'000'000'007;

struct ModInt
{
    [[gnu::always_inline]] constexpr ModInt& operator+=(
        const ModInt& rhs) noexcept
    {
        value += rhs.value;
        value -= kMOD & -u32{value >= kMOD};
        return *this;
    }

    [[nodiscard, gnu::always_inline]] constexpr ModInt operator+(
        const ModInt& rhs) const noexcept
    {
        auto copy = *this;
        copy += rhs;
        return copy;
    }

    [[gnu::always_inline]] constexpr ModInt& operator-=(
        const ModInt& rhs) noexcept
    {
        value += kMOD & -u32{value < rhs.value};
        value -= rhs.value;
        return *this;
    }

    [[nodiscard, gnu::always_inline]] constexpr ModInt operator-(
        const ModInt& rhs) const noexcept
    {
        auto copy = *this;
        copy -= rhs;
        return copy;
    }

    [[gnu::always_inline]] constexpr ModInt& operator*=(
        const ModInt& rhs) noexcept
    {
        u64 v = rhs.value;
        v *= value;
        if (v >= kMOD) v %= kMOD;
        value = cast<u32>(v);
        return *this;
    }

    [[nodiscard, gnu::always_inline]] constexpr ModInt operator*(
        const ModInt& rhs) const noexcept
    {
        auto copy = *this;
        copy *= rhs;
        return copy;
    }

    [[nodiscard, gnu::always_inline]] constexpr ModInt inverse() const noexcept
    {
        auto a = value;
        u32 x0 = 1, x1 = 0, mod = kMOD;
        while (a)
        {
            u32 q = mod / a;
            u32 r = mod % a;
            u32 x2 = x1 - q * x0;
            mod = a;
            a = r;
            x1 = x0;
            x0 = x2;
        }
        return {(x1 + kMOD) % kMOD};
    }

    [[gnu::always_inline]] constexpr ModInt& operator/=(
        const ModInt& rhs) noexcept
    {
        return *this *= rhs.inverse();
    }

    [[nodiscard, gnu::always_inline]] constexpr ModInt operator/(
        const ModInt& rhs) const noexcept
    {
        auto copy = *this;
        copy /= rhs;
        return copy;
    }

    template <std::unsigned_integral Exp>
    [[nodiscard, gnu::always_inline]] constexpr ModInt pow(
        Exp exp) const noexcept
    {
        ModInt r{1}, b = *this;

        while (exp)
        {
            // these two lines are equal to if (exp & 1) r *= b;
            u32 t = -(exp & 1);
            r *= ModInt((b.value & t) + (1u & ~t));

            b *= b;
            exp >>= 1;
        }

        return r;
    }

    u32 value = 0;
};

template <size_t k>
struct Vector
{
    template <typename Self>
    [[gnu::always_inline]]
    constexpr auto&& operator[](this Self&& self, u32 i) noexcept
    {
        [[assume(i < k)]];
        return std::forward<Self>(self).data[i];
    }

    alignas(k > 16 ? 64 : alignof(u32)) ModInt data[k];
};

template <u32 k>
using Matrix = std::array<Vector<k>, k>;

template <size_t k>
[[gnu::always_inline, gnu::target("avx2,bmi2")]] constexpr void square(
    Matrix<k>& __restrict__ a,
    Matrix<k>& __restrict__ c) noexcept
{
    constexpr u32 kReduceEvery = 31;

    alignas(64) std::array<u64, k> acc{};

    for (u32 i = 0; i < k; ++i)
    {
        acc.fill(0);

        const auto& ai = a[i];

        for (u32 l0 = 0; l0 < k; l0 += kReduceEvery)
        {
            const u32 lend = std::min<u32>(l0 + kReduceEvery, k);

            for (u32 l = l0; l < lend; ++l)
            {
                const u64 x = ai[l].value;
                if (!x) continue;

                const auto& al = a[l];

                for (u32 j = 0; j < k; ++j)
                {
                    acc[j] += x * al[j].value;
                }
            }

            for (u32 j = 0; j < k; ++j)
            {
                acc[j] %= kMOD;
            }
        }

        auto& ci = c[i];
        for (u32 j = 0; j < k; ++j)
        {
            ci[j].value = cast<u32>(acc[j]);
        }
    }
}
template <u32 m>
inline static constexpr Matrix<m> kBaseMatrix = []()
{
    Matrix<m> mtx{};
    for (u32 y = 0; y != m; ++y)
    {
        for (u32 x = m - 1 - y; x != m; ++x)
        {
            mtx[y][x] = {1};
        }
    }
    return mtx;
}();

template <size_t k>
[[gnu::always_inline, gnu::target("avx2,bmi2")]] constexpr void
multiply_base_inplace(
    Matrix<k>& __restrict__ a,
    Matrix<k>& __restrict__ tmp) noexcept
{
    for (u32 i = 0; i < k; ++i)
    {
        ModInt sum{};
        const auto& ai = a[i];
        auto& ti = tmp[i];

        for (u32 l = k; l--;)
        {
            sum += ai[l];
            ti[k - 1 - l] = sum;
        }
    }
}

template <size_t k>
[[nodiscard, gnu::always_inline, gnu::target("avx2,bmi2")]] constexpr auto
matrix_power(u32 exp) noexcept
{
    if (exp == 0)
    {
        Matrix<k> r{};
        for (u32 i = 0; i != k; ++i) r[i][i] = {1};
        return r;
    }

    Matrix<k> t[2];
    bool g = false;
    t[g] = kBaseMatrix<k>;

    for (u32 i = (std::bit_width(exp) - 1) & 63; i--;)
    {
        square(t[g], t[!g]);
        g = !g;
        if (exp & (1u << i))
        {
            multiply_base_inplace<k>(t[g], t[!g]);
            g = !g;
        }
    }

    return t[g];
}

class Solution
{
public:
    template <u32 m>
    [[nodiscard, gnu::target("avx2,bmi2")]]
    static u32 impl(u32 n) noexcept
    {
        auto mp = matrix_power<m>(n - 2);
        u64 g = 0;
        for (u32 y = 0; y != m; ++y)
        {
            for (u32 x = 0; x != m; ++x)
            {
                g += u64{x + 1} * mp[y][x].value;
            }
        }

        return (g << 1) % kMOD;
    }

    inline static constexpr auto kFN =
        []<u32... m>(std::integer_sequence<u32, m...>)
    {
        return std::array{impl<m + 1>...};
    }(std::make_integer_sequence<u32, 74>());

    [[nodiscard, gnu::target("avx2,bmi2")]]
    u32 zigZagArrays(u32 n, u32 l, u32 r) noexcept
    {
        if (r == l) return 0;
        return kFN[r - l - 1](n);
    }
};
