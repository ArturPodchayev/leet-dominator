class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        def dsu_find(dsu,x):
            dsu[x] = x if x==dsu[x]  else dsu_find(dsu,dsu[x])
            return   dsu[x]
        def dsu_join(dsu,x,y): dsu[dsu_find(dsu,x)] = dsu_find(dsu,y)

        dsu,cntn,cnte,tree = [*range(n)], [0]*n, [0]*n, [0]*n

        for u,v in edges:  tree[u] +=1; tree[v] +=1; dsu_join(dsu,u,v)

        for i in range(n): cntn[s:= dsu_find(dsu,i)] +=1; cnte[s] += tree[i]

        return sum(1 for i in range(n)  if  cntn[i] and cnte[i] == cntn[i]*(cntn[i] -1))


        
