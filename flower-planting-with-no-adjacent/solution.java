class Solution {
    public int[] gardenNoAdj(int n, int[][] paths) {
        int[] assignedFlower = new int[n];
        
        //assgin flower to first four garden
        for(int i = 0; i < Math.min(n, 4); i++){
            assignedFlower[i] = i + 1;
        }
        if(n <= 4) return assignedFlower;
        
        
        List<Set<Integer>> graph = getGraph(paths, n);
        
        //assgin unused flower to remaining garden
        for(int i = 5; i <= n; i++){
            
            if(graph.get(i).size() == 0){
                //no neighbors, just assign default flower type
                assignedFlower[i - 1] = 1;
            }else{
                //have neighbours, find flower type which is not assigned to any of them
                assignedFlower[i - 1] = getUnAssignedFlowerType(graph.get(i), assignedFlower);
            }
        }
        
        return assignedFlower;
    }
    
    private int getUnAssignedFlowerType(Set<Integer> adjacents, int[] assignedFlower){
        
        boolean[] usedFlowerType = new boolean[5]; 
        
        //find all the flower, used by its neighbours 
        for(int adj : adjacents){
            int flowerType = assignedFlower[adj - 1];
            if(flowerType > 0)
                usedFlowerType[flowerType] = true;
        }
        
        //get unused flower type
        for(int flowerType = 1; flowerType <= 4; flowerType++){
            if(!usedFlowerType[flowerType]){
                return  flowerType;
            }
        }
        
        
        return 1;
    }
    
    private List<Set<Integer>> getGraph(int[][] paths, int n){
        
        List<Set<Integer>> graph = new ArrayList();
        
        for(int i = 0; i <= n; i++){
            graph.add(new HashSet());
        }
        
        for(int[] path : paths){
            graph.get(path[0]).add(path[1]);
            graph.get(path[1]).add(path[0]);
        }
        
        
        return graph;
    }
}
