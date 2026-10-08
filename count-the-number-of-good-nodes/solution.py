import collections
class Solution:
    def countGoodNodes(self, edges: List[List[int]]) -> int:
        count = 0
        graph = collections.defaultdict(list)
        for src, dest in edges:
            graph[src].append(dest)
            graph[dest].append(src)
        visited = set()

        def helper(node):
            nonlocal count
            if node in visited:
                return 0
            if not graph[node]:
                count += 1
                visited.add(node)
                return 1
            tot = 0
            curr = 0
            prev = 0
            flag = True
            for n in graph[node]:
                visited.add(node)
                curr = helper(n)
                tot += curr
                if prev != 0 and prev != curr:
                    flag = False
                prev = curr
            if flag:
                count += 1
            visited.add(node)
            return 1 + tot

        #print(graph)
        helper(0)
        #print(count)
        return count
            
