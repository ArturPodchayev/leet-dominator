class Solution {
    public String processStr(String s) {
        StringBuilder str=new StringBuilder(s);
        StringBuilder ans=new StringBuilder();
        int i=0;
        while(!str.isEmpty()&&i<str.length()){
            if(str.charAt(i)>='a'&&str.charAt(i)<='z')ans.append(str.charAt(i));
            else if(str.charAt(i)=='*'){
                if(!ans.isEmpty()){
                    ans.deleteCharAt(ans.length()-1);
                }
            }else if(str.charAt(i)=='#'){
                ans.append(ans);
            }else{
                ans.reverse();
            }
            i++;
        }
        return ans.toString();
    }
}
