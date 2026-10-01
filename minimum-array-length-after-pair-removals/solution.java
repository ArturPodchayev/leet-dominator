class Solution {
    public int minLengthAfterRemovals(List<Integer> nums) {
        
        int n=nums.size();
        
        PriorityQueue<int[]>q=new PriorityQueue<>((a,b)->b[1]-a[1]);

        HashMap<Integer,Integer>map=new HashMap<>();
        for(int i=0;i<n;i++){
            int x=nums.get(i);
            map.put(x,map.getOrDefault(x,0)+1);
        }
        for(Map.Entry<Integer,Integer>e:map.entrySet()){
            q.add(new int[]{e.getKey(),e.getValue()});
        }

        while(q.size()>1){
            int a[]=q.poll();
            int val=a[0];
            int freq=a[1];
            
            while(freq>0 && !q.isEmpty()){
                int b[]=q.poll();
                b[1]--;
                if(b[1]!=0){
                    q.add(b);
                }
                freq--;
            }
            if(freq>0){
                return freq;
            }
        }
        if(q.isEmpty()){
            return 0;
        }
        else{
            return q.peek()[1];
        }
    }
}
