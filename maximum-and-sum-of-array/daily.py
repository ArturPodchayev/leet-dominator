class Solution:
    def sumAndMultiply(self, s: str, queries: List[List[int]]) -> List[int]:


        prefix = [0]
        sprefix = [0]
        size = [0]
        sm = 0
        num = 0
        st = 0
        for i in range(len(s)):
            if s[i] != "0":
                st += 1
                sm += int(s[i])
                sm = sm % (10 ** 9 + 7)
                # print(num, (10), st)
                num *= (10 )
                # print(num)
                num += int(s[i])
                # print(num)
            prefix.append(sm)
            size.append(st)
            num %= (10 ** 9 + 7)
            sprefix.append(num)
        
        # print(prefix)
        # print(sprefix)
        # print(size)

        ans = []
        for i, j in queries:
            
            sm = prefix[j + 1] - prefix[i]
            tmp = size[j + 1] - size[i]
            # print(tmp, sprefix[i])
            tm = sprefix[j + 1] - (sprefix[i] * pow(10, tmp, (10 ** 9 + 7))) 
            # print(tm, sprefix[j + 1], (sprefix[i] * 10 ** tmp))
            ans.append(tm * sm % (10 ** 9 + 7))

        return (ans)
