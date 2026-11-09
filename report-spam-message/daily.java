class Solution {
    public List<Integer> busiestServers(int k, int[] arrival, int[] load) {
        
       TreeSet<Integer> freeServer = new TreeSet<>();
       for(int i =0;i<k;i++){
        freeServer.add(i);
       }
       PriorityQueue<long[]> busyServer =
        new PriorityQueue<>((a, b) ->
                Long.compare(a[0], b[0]));


        int n = arrival.length;
        int[] count = new int[k];

  
        for(int i =0;i<arrival.length;i++){
            int currentVal = arrival[i];
      
             while(!busyServer.isEmpty() && busyServer.peek()[0] <= currentVal){
                long[] curr = busyServer.poll();
                

                freeServer.add((int) curr[1]);
             }

             if(freeServer.isEmpty()){
                continue;
             }

             int prefer = ( i % k);

             Integer server = freeServer.ceiling(prefer);

             if(server == null) {
                    server = freeServer.first();
             }

             count[server]++;

             freeServer.remove(server);

             busyServer.offer(new long[]{ (long)currentVal + load[i] , server});
        }
        int max =0;
        for(int num : count){
       max = Math.max(max , num); 
        }
        List<Integer> list = new ArrayList<>();
        for(int i =0;i<count.length;i++){
            int num = count[i];
            if(num == max) { 
                list.add(i);
            }
        }
        return list;
      

    }
}

//0 -> 2 

// 1, ,2, 3, 4, 5
// 5, 2, 3 , 3, 3 

// 1 , -> 0 

// freeserver
// busyserver
