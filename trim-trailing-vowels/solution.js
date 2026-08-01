class Solution {
    public String trimTrailingVowels(String s) {
     StringBuilder sb=new StringBuilder(s);
     for(int i=sb.length()-1;i>=0;i--){
       char ch=sb.charAt(i); 
       if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        sb.deleteCharAt(i);

        }
        else{
            return sb.toString();
        }
     }
     return "";
    }
}
