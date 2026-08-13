class Solution:
    def minOperations(self, nums: List[int]) -> List[int]:
        ans = []
        for i in range(len(nums)):
            val = bin(nums[i])[2:]
            if str(val) == str(val)[::-1]:
                ans.append(0)
                continue
            else:
                num = nums[i]
                val = str(bin(num)[2:])
                cnt = 0
                while val != val[::-1]:
                    num += 1
                    cnt += 1
                    val = str(bin(num)[2:])
                
                sl = SortedList()
                print(cnt)
                sl.add(cnt)
                cnt = 0
                num = nums[i]
                val = str(bin(num)[2:])
                while val != val[::-1]:
                    num -= 1
                    cnt += 1
                    val = str(bin(num)[2:])
                print(cnt)
                sl.add(cnt)
                ans.append(sl[0])

        return ans
