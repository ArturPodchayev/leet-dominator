class Solution {
    public String[] shortestSubstrings(String[] arr) {
        
        HashMap<String,Integer>map=new HashMap<>();
        HashMap<Integer,HashSet<String>>map2=new HashMap<>();
        int n=arr.length;

        for(int i=0;i<n;i++){
            String s=arr[i];
            int len=s.length();
            HashSet<String>set=new HashSet<>();

            for(int j=0;j<len;j++){
                for(int k=j;k<len;k++){
                    String t=s.substring(j,k+1);
                    if(!set.contains(t)){
                        set.add(t);
                        map.put(t,map.getOrDefault(t,0)+1);
                    }
                }
            }
            map2.put(i,set);
            //map2.get(i).add(new HashSet<>(set));
        }

        String ans[]=new String[n];

        for(int i=0;i<n;i++){
            HashSet<String>st=map2.get(i);
            boolean unique=false;
            String minSt=null;
            
            for(String a:st){
                if (map.get(a) == 1) {
                    if (minSt == null || a.length() < minSt.length() ||
                            (a.length() == minSt.length() && a.compareTo(minSt) < 0)) {
                        minSt = a;
                    }
                }
            }
            if(minSt==null){
                ans[i]="";
            }
            else{
                ans[i]=minSt;
            }
            
        }
        return ans;
    }
    
}
