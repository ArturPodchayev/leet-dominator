class Solution:
    def longestRepeating(self, s: str, queryCharacters: str, queryIndices: List[int]) -> List[int]:
        n = len(s)

        # Node: (left_char, right_char, prefix, suffix, best, length)
        tree = [None] * (4 * n)

        def merge(a, b):
            left_char = a[0]
            right_char = b[1]
            prefix = a[2]
            suffix = b[3]
            best = max(a[4], b[4])
            length = a[5] + b[5]

            if a[1] == b[0]:
                best = max(best, a[3] + b[2])

                if a[2] == a[5]:
                    prefix = a[5] + b[2]

                if b[3] == b[5]:
                    suffix = b[5] + a[3]

            return (left_char, right_char, prefix, suffix, best, length)

        def build(node, l, r):
            if l == r:
                c = s[l]
                tree[node] = (c, c, 1, 1, 1, 1)
                return

            mid = (l + r) // 2
            build(node * 2, l, mid)
            build(node * 2 + 1, mid + 1, r)

            tree[node] = merge(tree[node * 2], tree[node * 2 + 1])

        def update(node, l, r, idx, c):
            if l == r:
                tree[node] = (c, c, 1, 1, 1, 1)
                return

            mid = (l + r) // 2

            if idx <= mid:
                update(node * 2, l, mid, idx, c)
            else:
                update(node * 2 + 1, mid + 1, r, idx, c)

            tree[node] = merge(tree[node * 2], tree[node * 2 + 1])

        build(1, 0, n - 1)

        ans = []

        for c, idx in zip(queryCharacters, queryIndices):
            update(1, 0, n - 1, idx, c)
            ans.append(tree[1][4])

        return ans
