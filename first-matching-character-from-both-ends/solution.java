class Solution {
    public int firstMatchingIndex(String s) {
        int l=0,r=s.length()-1;
        while(l<=r){
            if(s.charAt(l)==s.charAt(r)){
                return l;
            }
            l++;
            r--;
        }
        return -1;
    }
}
