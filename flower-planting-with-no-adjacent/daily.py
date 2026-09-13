class Solution:
    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
        n,ans = len(img1), 0
        limg1 = sum(sum(img1[i][j] <<(n-j-1) for j in range(n)) <<(2*n*(n-i-1)) for i in range(n))
        limg2 = sum(sum(img2[i][j] <<(n-j-1) for j in range(n)) <<(2*n*(n-i-1)) for i in range(n))
        for s in range(4*n*n):
            ans= max(ans, ((limg1>>s)&limg2).bit_count(), (limg1&(limg2>>s)).bit_count())
        return   ans        
