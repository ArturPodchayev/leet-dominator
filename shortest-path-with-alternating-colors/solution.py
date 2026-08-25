class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
        g=[[] for _ in range(n)]
        # make color as row of matrix and node as coloumn
        # the row size is just 2 and node size is n
        for u,v in redEdges:
            g[u].append(v)
        for u,v in blueEdges:
            g[u].append(n+v)

        dist=[-1]*n

        vs=[[False]*2 for _ in range(n)] # 0 and 1 visiting
        mn=101
        queue=[0]*mn
        left=0
        right=0
        size=1
        queue[0]=0
        dist[0]=0
        level=1
        the_initial_time_of_zero=False # no color of zero node at begining

        while size:

            sz=size

            for _ in range(sz):
                cur=queue[left]
                left=(left+1)%mn
                u=cur%n
                last=-1
                size-=1

                if the_initial_time_of_zero:
                    last=cur//n

                the_initial_time_of_zero=True

                for edge in g[u]:

                    v=edge%n 
                    color=edge//n

                    if last!=color and not vs[v][color]:
                        vs[v][color]=True

                        if dist[v]==-1:
                            dist[v]=level
                        right=(right+1)%mn
                        queue[right]=color*n+v
                        size+=1
            level+=1

        return dist
