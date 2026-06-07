
class Solution {
    public TreeNode createBinaryTree(int[][] desc) {
        int n = desc.length;
        Map<Integer, int[]> mpp= new HashMap<>();
        Set<Integer> hasParent = new HashSet<>();
        //since in cosntraint parent, child int value cant be 0 means later we check if arr[0,1] is 0 toh null h unka lc or rc
        for(int[] row: desc){
            
            hasParent.add(row[1]);
             //left child put at index 0 of list
            if(row[2]==1){     
                if(!mpp.containsKey(row[0])){
                    int[] arr = new int[2];
                    arr[0] = row[1];
                    mpp.put(row[0], arr );
                }
                else{
                    int[] arr  = mpp.get(row[0]);
                    arr[0] = row[1];
                    mpp.put(row[0],arr);
                }

            }
             else{     
                //right child put at index 1 of list
                if(!mpp.containsKey(row[0])){
                    int[] arr = new int[2];
                    arr[1] = row[1];
                    mpp.put(row[0],arr);
                }
                else{
                   int[] arr  = mpp.get(row[0]);
                    arr[1] = row[1];
                    mpp.put(row[0],arr);
                }
            }
           
        }
        TreeNode root = null;
        for(int[] row: desc) if(!hasParent.contains(row[0])) root = new TreeNode(row[0]);

        // now root is decided.
        // now we will traverse the hashmap recusively to find the lc and rc of each node.
     
        func(root,mpp);
        return root;
    }


    // recursive function to find left and right child of each node with help of map mpp
    
    public void func(TreeNode root,   Map<Integer,int[]> mpp ){
        // base case: current root doesnt have a child at all (mtlb map mein nhi hoga vo)
       
        if(root==null || !mpp.containsKey(root.val)) return;


        int leftVal = mpp.get(root.val)[0];
        int rightVal = mpp.get(root.val)[1];
        root.left = leftVal==0?null : new TreeNode(leftVal);
        root.right = rightVal==0?null : new TreeNode(rightVal);

        func(root.left, mpp);
        func(root.right,mpp);

    
    }
}
