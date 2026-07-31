class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        return message.translate({
            ord(a): b for a, b in zip(dict.fromkeys(filter(str.isalpha, key)), ascii_lowercase)
        })
