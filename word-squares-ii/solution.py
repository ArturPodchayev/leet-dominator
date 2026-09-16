class Solution:
    def wordSquares(self, words: List[str]) -> List[List[str]]:

        used = [False] * len(words)
        curr = []
        perms = []

        def backtrack():
            if len(curr) == 4:
                perms.append(curr.copy())
                return

            for i in range(len(used)):
                if used[i]:
                    continue

                curr.append(words[i])
                used[i] = True

                backtrack()

                curr.pop()
                used[i] = False


        backtrack()
        res = []
        for arr in perms:
            top = arr[0]
            left = arr[1]
            right = arr[2]
            bottom = arr[3]
            if (
                top[0] == left[0] and 
                top[3] == right[0] and 
                bottom[0] == left[3] and 
                bottom[3] == right[3]
            ):
                res.append(arr)

        res.sort()
        return res
