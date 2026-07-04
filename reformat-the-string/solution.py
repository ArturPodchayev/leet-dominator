class Solution:
    def reformat(self, s: str) -> str:
        digits = []
        letters = []

        # 1. Separate characters
        for char in s:
            if char.isdigit():
                digits.append(char)
            else:
                letters.append(char)

        # 2. Check if a valid reformatting is impossible
        if abs(len(digits) - len(letters)) > 1:
            return ''
        
        # 3. Dynamically assign 'a' to the longer list
        a = digits if len(digits) >= len(letters) else letters
        b = letters if len(digits) >= len(letters) else digits

        # 4. Zip the matching pairs
        output = [c for pair in zip(a, b) for c in pair]
        
        # 5. Safely append the leftover element from 'a' if it exists
        output.extend(a[len(b):])

        return ''.join(output)
