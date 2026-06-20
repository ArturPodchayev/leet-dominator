class Solution {
    public long countPalindromePaths(List<Integer> parent, String s) {
        /*
        1. we find the mask from the root to the node.
        2. to find the data between the nodes, we check if this mask existed before, 
        if yes, that makes it a plaindrome to exist between the 
        last mask from the last node and this node
        3. One more check will be to flip one bit and check if that mask existed before,
        if yes, that means we found a palindrome with odd length
        4. We maintain the list if last seen masks, and we maintain the mask!
        5. we maintain the value for the complete count of plaindrome while looping 
        over the nodes
        */
        
        List<List<Integer>> graph = createAdjList(parent);
        Map<Integer, Long> previousMaskCountMap = new HashMap<>();
        return dfs(graph, 0, 0, previousMaskCountMap, s);        
    }

    private List<List<Integer>> createAdjList(List<Integer> parent) {
        List<List<Integer>> graph = new ArrayList<>();
        for(int i=0;i<parent.size();i++) {
            graph.add(new ArrayList<>());
        }
        for(int i=1;i<parent.size();i++) {
            graph.get(parent.get(i)).add(i);
        }
        return graph;
    }

    private long dfs(List<List<Integer>> graph, int i, int mask, 
        Map<Integer, Long> previousMaskCountMap, String s) {
        long r=0;

        // Update the mask on this path for this character at position i
         mask = mask ^ 1 << (s.charAt(i)-'a');
        // increament the count of palindrome fromed with this node with the 
        // previous node found
        if(previousMaskCountMap.containsKey(mask)) {
            r += previousMaskCountMap.get(mask);
        }

        // we update the number for mask
        previousMaskCountMap.put(mask, r+1);
        
        // Move the 1 to the 25th position, and loop to find the match by flipping one bit
        for(int currMask=1<<25; currMask > 0;currMask >>= 1) {
            if(previousMaskCountMap.containsKey(mask ^ currMask)) {
                r += previousMaskCountMap.get(mask ^ currMask);
            }
        }

        List<Integer> neighbours = graph.get(i);
        for(Integer neighbour: neighbours) {
            r += dfs(graph, neighbour, mask, previousMaskCountMap, s);
        }
        return r;
    }
}
