class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        int_n = n
        str_n = str(n)
        product_n = math.prod(int(i) for i in str_n)

        while product_n % t != 0:
            int_n += 1
            str_n = str(int_n)
            product_n = math.prod(int(i) for i in str_n)
        
        return int_n
