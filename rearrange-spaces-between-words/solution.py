class Solution:
    def reorderSpaces(self, text: str) -> str:
        words = text.split()
        
        # Count the total number of spaces in the original string
        total_spaces = text.count(' ')
        
        # If there's only one word, all spaces should go to the end
        if len(words) == 1:
            return words[0] + ' ' * total_spaces
        
        # Calculate the number of spaces to be placed between words
        spaces_between_words = total_spaces // (len(words) - 1)
        
        # Calculate the remaining spaces to be placed at the end
        extra_spaces = total_spaces % (len(words) - 1)
        
        # Join words with the calculated spaces in between
        result = (' ' * spaces_between_words).join(words)
        
        # Append the extra spaces at the end
        result += ' ' * extra_spaces
        
        return result
