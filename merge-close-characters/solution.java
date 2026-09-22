class Solution {
    public String mergeCharacters(String s, int k) {
  // use  deque 
    Deque<Character> dq = new LinkedList<>();
    HashMap<Character,Integer> map = new HashMap<>();
        for(int i=0;i<s.length();i++){
            int currentindx=dq.size();  // very important step 
             if(!map.containsKey(s.charAt(i))){
                map.put(s.charAt(i),currentindx);
                dq.addLast(s.charAt(i));
            } else{
                if(currentindx-map.get(s.charAt(i))<=k) continue;
                dq.addLast(s.charAt(i));
                map.put(s.charAt(i),currentindx);
            }      
        }
        StringBuilder sb = new StringBuilder("");
        while(!dq.isEmpty()){
            sb.append(dq.removeFirst());
        }
        return sb.toString();
    }
}
