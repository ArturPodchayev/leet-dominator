class Solution:
    def maxPalindromes(self, S: str, k: int) -> int:
        total_len, palindrome_ranges, last_position, palindrome_count = len(S), [], -float('inf'), 0
        for idx in range(2 * total_len - 1):
            left_bound = idx // 2
            right_bound = left_bound + idx % 2
            while left_bound >= 0 and right_bound < total_len and S[left_bound] == S[right_bound]:
                if right_bound + 1 - left_bound >= k:
                    palindrome_ranges.append((left_bound, right_bound + 1))
                    break
                left_bound -= 1
                right_bound += 1
        for start_pos, end_pos in palindrome_ranges:
            if start_pos >= last_position:
                last_position = end_pos
                palindrome_count += 1
            elif end_pos < last_position:
                last_position = end_pos
        return palindrome_count
