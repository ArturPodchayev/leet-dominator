class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        cnt = Counter(text)
        return min(cnt[k]//v for k,v in {'b':1,'a':1,'l':2,'o':2,'n':1}.items())
        
