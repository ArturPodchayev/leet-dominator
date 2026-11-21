class Solution:
    def findSubtreeSizes(self, parent: List[int], s: str) -> List[int]:
        n = len(parent)
        tree = [[] for _ in range(n)]

        for i in range(1, n):
            tree[parent[i]].append(i)

        newParent = parent[:]
        last = [[] for _ in range(26)]

        stack = [(0, 0)]

        while stack:
            node, state = stack.pop()
            c = ord(s[node]) - ord('a')

            if state == 0:
                if last[c]:
                    newParent[node] = last[c][-1]

                last[c].append(node)
                stack.append((node, 1))

                for child in reversed(tree[node]):
                    stack.append((child, 0))

            else:
                last[c].pop()

        newTree = [[] for _ in range(n)]

        for i in range(1, n):
            newTree[newParent[i]].append(i)

        ans = [1] * n
        order = [0]

        for node in order:
            order.extend(newTree[node])

        for node in reversed(order[1:]):
            ans[newParent[node]] += ans[node]

        return ans
