class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        c = 0

        for val in arr1:
            check = True

            for val2 in arr2:
                if abs(val - val2) <= d:
                    check = False
                    break

            if check:
                c += 1

        return c
