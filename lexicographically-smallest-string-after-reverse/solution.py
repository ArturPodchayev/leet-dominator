class Solution {
    public String lexSmallest(String s) {
        String res=s;
        int n=s.length();
        for (int k=1;k<=n;k++){
            String first=new StringBuilder(s.substring(0, k)).reverse().append(s.substring(k)).toString();
            String last=s.substring(0,n-k)+new StringBuilder(s.substring(n-k)).reverse().toString();
            if (first.compareTo(res)<0){
                res=first;
            }
            if (last.compareTo(res)<0){
                res=last;}
        }
        return res;
    }
}
