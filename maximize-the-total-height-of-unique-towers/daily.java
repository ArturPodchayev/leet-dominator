class Solution {
    public int maxDepth(String s) {
        int d=0,max=0;
        for(char c:s.toCharArray()){
            if(c=='('){
                d++;
                max=Math.max(d,max);
            }
            else if(c==')') d--;
        }

        return max;
    }
}
