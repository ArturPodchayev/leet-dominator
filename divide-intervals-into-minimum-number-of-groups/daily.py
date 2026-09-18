class Solution:
    def maxNumOfSubstrings(self, s: str) -> list[str]:
        first, last = {}, {}
        for i, char in enumerate(s):
            first.setdefault(char, i)
            last[char] = i

        candidates = []
        for char, left in first.items():
            right = last[char]
            position = left
            while position <= right:
                current = s[position]
                if first[current] < left:
                    break
                right = max(right, last[current])
                position += 1
            else:
                candidates.append((left, right))

        candidates.sort(key=lambda interval: interval[1] - interval[0])
        chosen = []
        for left, right in candidates:
            if all(right < a or b < left for a, b in chosen):
                chosen.append((left, right))
        chosen.sort()
        return [s[left:right + 1] for left, right in chosen]
