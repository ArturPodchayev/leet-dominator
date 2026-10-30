class Solution:
    def shortestPath(self, last: int, edges: List[List[int]], labels: str, k: int) -> int:

        hs = defaultdict(list)

        for i, j, w in edges:
            hs[i].append((j, w))

        # print(hs)

        heap = []

        heapq.heappush(heap, (0, 0, labels[0], 1))
        seen = defaultdict(int)

        ans = inf
        while heap:

            w, node, prev, cnt = heapq.heappop(heap)

            if node == last - 1:
                ans = min(ans, w)
                # return

            # if w > ans: continue
            if node in seen and seen[node] < w: continue

            seen[node] = min(seen[node], w)

            for n, wg in hs[node]:
                if labels[n] != prev:
                    heapq.heappush(heap, (w + wg, n, labels[n], 1))
                else:
                    # cnt += 1
                    if cnt + 1 <= k:
                        heapq.heappush(heap, (w + wg, n, labels[n], cnt + 1))

        return (ans) if ans != inf else -1
