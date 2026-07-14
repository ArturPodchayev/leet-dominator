class Solution:
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        if len(arr) == 1:
            return arr
        arr.sort()
        length = len(arr)
        median = arr[(length - 1) // 2]
        start, end = 0, len(arr) - 1
        result = []
        while(start <= end):
            if abs(arr[start] - median) > abs(arr[end] - median):
                result.append(arr[start])
                start += 1
            elif abs(arr[start] - median) <= abs(arr[end] - median):
                result.append(arr[end])
                end -= 1
            if len(result) == k:
                return result
  
