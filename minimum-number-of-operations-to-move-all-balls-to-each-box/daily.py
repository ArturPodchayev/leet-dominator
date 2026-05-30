from sortedcontainers import SortedList
class Solution:
    def getResults(self, queries: List[List[int]]) -> List[bool]:

        # Blocks along the axis
        axis = SortedList()

        # Range Max of intervals from 0 to each block
        itvl = SegTree(max(q[1] for q in queries))

        res = []
        axis.add(0)
        itvl.update(0,0)

        for q in queries:
            if q[0] == 1:
                ind = axis.bisect(q[1])
                if ind < len(axis):
                    # Update the interval of the next block
                    nxt = axis[ind]
                    itvl.update(nxt, nxt-q[1])
                # Set the interval of the current block
                itvl.update(q[1], q[1] - axis[ind-1])
                # Add the current block on axis
                axis.add(q[1])
            else:
                # Find the previous block
                prv = axis[axis.bisect(q[1])-1]
                # Range query the max interval before prv
                mx = max(q[1]-prv, itvl.query(prv))

                res.append(q[2] <= mx)
        return res

class SegTree:

    def __init__(self, n: int):
        self.n = 1 << n.bit_length()
        self.tree = [0] * (self.n*2)

    def update(self, ind: int, val: int):
        ind += self.n
        self.tree[ind] = val
        while ind > 1:
            ind //= 2
            self.tree[ind] = max(self.tree[ind*2], self.tree[ind*2+1])
    
    def query(self, ind: int) -> int:
        ind += self.n
        res = self.tree[ind]
        while ind > 1:
            if ind%2 == 1:
                res = max(res, self.tree[ind-1])
            ind //= 2
        return res
