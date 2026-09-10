class Solution {
    public long maximumScore(int[] nums, String s) {
        long res=0;
        int n=nums.length;
        boolean fl=false;

        for(int i=0;i<n;i++){
            if(s.charAt(i)=='1'){
                res+=nums[i];
                fl=true;
            }
        }
        if(!fl)return 0;

        long ct=0;
        PriorityQueue<Integer>pq=new PriorityQueue<>(Collections.reverseOrder());

        for(int i=0;i<n;i++){
           pq.add(nums[i]);

            if(s.charAt(i)=='1'){
                ct+=pq.poll();
            }
        }
        return Math.max(res,ct);
        
    }
}
