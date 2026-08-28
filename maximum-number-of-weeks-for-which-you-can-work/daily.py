class Solution:
    def lexPalindromicPermutation(self, s: str, target: str) -> str:
        n = len(s)
        m = n // 2
        
        # 1. Count frequencies using fixed-size array
        counts = [0] * 26
        for ch in s:
            counts[ord(ch) - 97] += 1
        
        odd_char = -1
        for i in range(26):
            if counts[i] % 2 != 0:
                if odd_char != -1:
                    return ""  # More than one odd frequency
                odd_char = i
        
        # Available counts for the first half (length m)
        half_counts = [c // 2 for c in counts]
        mid_str = chr(odd_char + 97) if odd_char != -1 else ""
        
        def build_palindrome(half_chars: list[str]) -> str:
            first_half = "".join(half_chars)
            return first_half + mid_str + first_half[::-1]
        
        target_indices = [ord(c) - 97 for c in target]
        
        # 2. Check Branch A: First half exactly matches target[:m]
        temp_counts = list(half_counts)
        can_match_all = True
        for i in range(m):
            t_idx = target_indices[i]
            if temp_counts[t_idx] > 0:
                temp_counts[t_idx] -= 1
            else:
                can_match_all = False
                break
                
        if can_match_all:
            exact_cand = build_palindrome(list(target[:m]))
            if exact_cand > target:
                return exact_cand
        
        # 3. Branch B: Find longest prefix match, increment at position i, then fill greedily
        curr_counts = list(half_counts)
        matched_len = 0
        for i in range(m):
            t_idx = target_indices[i]
            if curr_counts[t_idx] > 0:
                curr_counts[t_idx] -= 1
                matched_len += 1
            else:
                break
                
        for i in range(matched_len, -1, -1):
            if i < matched_len:
                curr_counts[target_indices[i]] += 1
            
            if i >= m:
                continue
            
            t_idx = target_indices[i]
            
            # Find the smallest available character c > target[i]
            for c_idx in range(t_idx + 1, 26):
                if curr_counts[c_idx] > 0:
                    curr_counts[c_idx] -= 1
                    
                    res_half = list(target[:i]) + [chr(c_idx + 97)]
                    for rem_idx in range(26):
                        if curr_counts[rem_idx] > 0:
                            res_half.extend([chr(rem_idx + 97)] * curr_counts[rem_idx])
                    
                    return build_palindrome(res_half)
                    
        return ""
