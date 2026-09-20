class Solution {
    public int reverseDegree(String s) {
        int ans=0;
        for(int i=0;i<s.length();i++){
            ans+=('a'-s.charAt(i)+26)*(i+1);
        }
        return ans;
    }
}
