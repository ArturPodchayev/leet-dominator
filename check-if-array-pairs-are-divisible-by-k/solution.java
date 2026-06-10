class Solution {
    public boolean canArrange(int[] arr, int k) {
        for(int i=0;i<arr.length;i++){
            arr[i]=arr[i]%k;
        }
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            if(arr[i]>=0 && map.containsKey(k-arr[i])){

                int var=k-arr[i];
                map.put(var,map.get(var)-1);
                if(map.get(var)==0) map.remove(var);

            }else if(arr[i]<0 && map.containsKey((-1)*k-arr[i])){

                int var=(-1)*k-arr[i];
                map.put(var,map.get(var)-1);
                if(map.get(var)==0) map.remove(var);

            }            
            else if(map.containsKey(arr[i]*-1)){

                int var=arr[i]*-1;
                map.put(var,map.get(var)-1);
                if(map.get(var)==0) map.remove(var);

            }
            else{
                map.put(arr[i],map.getOrDefault(arr[i],0)+1);
            }
        }
        return map.size()==0;
    }
}
