class Solution:
    def findMaxPathScore(self, edges: List[List[int]], online: List[bool], k: int) -> int:
        
        mxx = 0
        hs = defaultdict(list)
        for i, j, w in edges:
            hs[i].append((j, w))
            mxx = max(mxx, w)


        def check(target):

            heap = []
            heapq.heappush(heap, (0, 0))
            seen = defaultdict(int)

            while heap:

                sm, node = heapq.heappop(heap)

                if node == len(online) - 1:
                    return True

                if node in seen and seen[node] <= sm: continue
    
                seen[node] = sm

                for n, w in hs[node]:
                    if sm + w > k: continue
                    if not online[n]: continue
                    if w < target: continue
                    heapq.heappush(heap, (sm + w, n))

            return False

        l = -1
        r = mxx + 1

        while l <= r:

            mid = (l + r) // 2

            if check(mid):
                l = mid + 1
            else:
                r = mid - 1
        

        return (r) if r >= 0 else -1
