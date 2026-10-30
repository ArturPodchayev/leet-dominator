#include <bit>
#include <cstdint>
#include <cstring>
#include <string_view>
#include <vector>

using u8 = uint8_t;
using u16 = uint16_t;
using u32 = uint32_t;
using u64 = uint64_t;
#ifndef LC_LOCAL_BUILD
auto init = []()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 'c';
}();
#endif

class Solution
{
public:
    inline static constexpr u32 kMaxN = 50'000;
    inline static constexpr u32 kMaxE = 50'000;
    inline static constexpr u32 kMaxK = 50;
    inline static constexpr u32 kRunMask = 0x3F;
    inline static constexpr u32 kDifferentEdgesDone = 0x40;
    inline static constexpr u32 kPendingCountShift = 8;

private:
    class MinHeap
    {
    public:
        [[gnu::always_inline, gnu::no_sanitize_address]]
        MinHeap() noexcept = default;

        [[nodiscard, gnu::always_inline, gnu::no_sanitize_address]]
        bool empty() const noexcept
        {
            return size == 0;
        }

        [[nodiscard, gnu::always_inline, gnu::no_sanitize_address]]
        static u64* construction_buffer() noexcept
        {
            return data;
        }

        [[gnu::always_inline, gnu::no_sanitize_address]] void push(
            u64 entry) noexcept
        {
            u32 pos = size++;
            while (pos)
            {
                u32 parent = (pos - 1) / 4;
                if (data[parent] <= entry) break;
                data[pos] = data[parent];
                pos = parent;
            }
            data[pos] = entry;
        }

        [[nodiscard, gnu::always_inline, gnu::no_sanitize_address]] u64
        pop() noexcept
        {
            u64 entry = data[0];
            u64 tail = data[--size];
            data[size] = ~u64{};
            data[size + 1] = ~u64{};
            data[size + 2] = ~u64{};
            u32 pos = 0;
            while (pos * 4 + 1 < size)
            {
                u32 first = pos * 4 + 1;
                u32 left = first + (data[first + 1] < data[first]);
                u32 right = first + 2 + (data[first + 3] < data[first + 2]);
                u32 child = data[left] <= data[right] ? left : right;
                if (tail <= data[child]) break;
                data[pos] = data[child];
                pos = child;
            }
            data[pos] = tail;
            return entry;
        }

    private:
        inline static u64 data[kMaxE * kMaxK + 4];
        u32 size = 0;
    };

public:
    inline static u16 node_work[kMaxN];
    inline static u16 offset[kMaxN + 1];
    inline static u16 same_end[kMaxN];
    inline static u32 adjacency[kMaxE];
    inline static u32 cheapest_cost[kMaxN];

    [[gnu::always_inline, gnu::no_sanitize_address]] static void
    graph_from_edges(
        const std::vector<std::vector<int>>& edges,
        u32 n,
        const char* labels,
        u32 k,
        u64* raw_edges) noexcept
    {
        std::memset(node_work, 0, n * sizeof(u16));
        std::memset(same_end, 0, n * sizeof(u16));
        const u32 m = edges.size() & ~0u;
        const auto* edge_data = edges.data();
        u32 active = 0;
        for (u32 i = 0; i != m; ++i)
        {
            const auto* edge = edge_data[i].data();
            u32 a = edge[0] & 0xFFFF;
            u32 b = edge[1] & 0xFFFF;
            u32 w = edge[2] & 0xFFFF;
            bool same = k > 1 && labels[a] == labels[b];
            raw_edges[active++] =
                (u64{same} << 48) | (u64{a} << 32) | (w << 16) | b;
            ++node_work[a];
            if (same) ++same_end[a];
        }
        u32 sum = 0;
        for (u32 i = 0; i != n; ++i)
        {
            offset[i] = sum & 0xFFFF;
            same_end[i] = (sum + same_end[i]) & 0xFFFF;
            sum += node_work[i];
            node_work[i] = offset[i];
            cheapest_cost[i] = same_end[i];
        }
        offset[n] = sum & 0xFFFF;
        for (u32 i = 0; i != active; ++i)
        {
            u64 edge = raw_edges[i];
            u32 a = (edge >> 32) & 0xFFFF;
            u32 pos = (edge >> 48) ? node_work[a]++ : cheapest_cost[a]++;
            adjacency[pos] = edge & 0xFFFFFFFFu;
        }
    }

    [[gnu::no_sanitize_address]] int shortestPath(
        u32 n,
        std::vector<std::vector<int>>& edges,
        std::string_view labels,
        u32 k)
    {
        [[assume(n <= kMaxN)]];
        [[assume(n > 0)]];
        [[assume(k <= kMaxK)]];
        [[assume(k > 0)]];

        const char* label_data = labels.data();
        MinHeap heap;
        graph_from_edges(
            edges,
            n,
            label_data,
            k,
            MinHeap::construction_buffer());

        u32 best_cost = ~u32{};

        u32 bw = std::bit_width(n - 1) & 31;
        u32 node_mask = (1u << bw) - 1u;
        auto* packed_counts = node_work;
        std::memset(packed_counts, kMaxK + 1, n * sizeof(u16));
        std::memset(cheapest_cost, 0xFF, n * sizeof(u32));

        auto push =
            [&] [[gnu::no_sanitize_address]] (u32 node, u32 count, u32 new_cost)
        {
            if (new_cost >= best_cost) return;
            if (count > k) return;

            if (node + 1 == n)
            {
                best_cost = new_cost;
                return;
            }
            u32 m = (count << bw) | node;
            u32 counts = packed_counts[node];
            bool settled = (counts & kRunMask) <= count;
            bool dominated = ((counts >> kPendingCountShift) <= count) &
                             (cheapest_cost[node] <= new_cost);
            if (settled | dominated) return;
            if (new_cost <= cheapest_cost[node])
            {
                cheapest_cost[node] = new_cost;
                packed_counts[node] = ((packed_counts[node] & 0xFF) |
                                       (count << kPendingCountShift)) &
                                      0xFFFF;
            }
            u64 entry = (u64{new_cost} << 32) | m;
            heap.push(entry);
        };

        push(0, 1, 0);

        while (!heap.empty())
        {
            u64 entry = heap.pop();
            u32 cost = entry >> 32;
            if (cost >= best_cost) break;
            u32 m = entry & 0xFFFFFFFFu;
            u32 count = m >> bw;
            u32 i = m & node_mask;
            u32 counts = packed_counts[i];
            if ((counts & kRunMask) <= count) continue;
            packed_counts[i] =
                (counts & 0xFF00) | kDifferentEdgesDone | (count & kRunMask);
            if (count < k)
            {
                for (u32 e = offset[i]; e != same_end[i]; ++e)
                {
                    u32 edge = adjacency[e];
                    push(edge & 0xFFFF, count + 1, cost + (edge >> 16));
                }
            }
            if (!(counts & kDifferentEdgesDone))
            {
                for (u32 e = same_end[i]; e != offset[i + 1]; ++e)
                {
                    u32 edge = adjacency[e];
                    u32 child = edge & 0xFFFF;
                    if (k == 1 && label_data[i] == label_data[child]) continue;
                    push(child, 1, cost + (edge >> 16));
                }
            }
        }

        return std::bit_cast<int>(best_cost);
    }
};
