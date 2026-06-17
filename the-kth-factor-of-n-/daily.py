class Solution:
    def processStr(self, s: str, k: int) -> str:
        s_len = 0

        for x in s:
            if x == '*':
                s_len = max(0, s_len - 1)
            elif x == '#':
                s_len *= 2
            elif x == '%':
                continue
            else:
                s_len += 1

        if k >= s_len:
            return '.'

        new_k = k
        cur_len = s_len

        for idx, x in enumerate(s[::-1]):
            if x == '*':
                cur_len += 1
                if new_k == (cur_len - 1):
                    new_k = idx - 1

            elif x == '#':
                cur_len //= 2
                new_k %= cur_len

            elif x == '%':
                new_k = cur_len - new_k - 1

            else:
                cur_len -= 1
                if new_k == cur_len:
                    return x
