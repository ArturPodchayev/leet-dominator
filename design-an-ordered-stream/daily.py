class Solution:
    def smallestPalindrome(self, s: str, k: int) -> str:
        LIMIT = 10**6 + 1

        freq = Counter(s)

        mid = ""
        half = {}
        half_len = 0

        for ch in sorted(freq):
            if freq[ch] & 1:
                mid = ch
            half[ch] = freq[ch] // 2
            half_len += half[ch]

        def count_perms(cnt):
            total = sum(cnt.values())
            ways = 1
            rem = total
            for ch in sorted(cnt):
                c = cnt[ch]
                if c:
                    ways *= comb(rem, c)
                    if ways > LIMIT:
                        return LIMIT
                    rem -= c
            return ways

        if count_perms(half) < k:
            return ""

        first = []

        for _ in range(half_len):
            for ch in sorted(half):
                if half[ch] == 0:
                    continue

                half[ch] -= 1
                ways = count_perms(half)

                if ways >= k:
                    first.append(ch)
                    break
                else:
                    k -= ways
                    half[ch] += 1

        left = "".join(first)
        return left + mid + left[::-1]
