class Solution {
    public String mapWordWeights(String[] words, int[] weights) {
      StringBuilder sb=new StringBuilder();
        char[]charArr={'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'};
        for(String cur:words){
            int sum=-1;
            for(char c:cur.toCharArray()){
                sum+=weights[c-'a'];
            }
            sb.append(charArr[(sum+1)%26]);
        }
        return sb.toString();
    }
}
