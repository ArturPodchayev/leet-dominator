class Solution:
    def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:
        colors = [0] * n
        colorCount = 0
        returnColors = []
        for index, color in queries:
            c_before = colors[index]
            c_left = colors[index - 1] if index > 0 else 0
            c_right = colors[index + 1] if index < n-1 else 0
            if c_before != 0:
                if c_before == c_left: colorCount -= 1
                if c_before == c_right: colorCount -= 1
            colors[index] = color
            if color != 0:
                if color == c_left: colorCount += 1
                if color == c_right: colorCount += 1
            returnColors.append(colorCount)
        return returnColors
