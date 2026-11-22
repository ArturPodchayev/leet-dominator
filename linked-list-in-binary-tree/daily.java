class Solution {
    public boolean checkString(String s) {
        int f = 1;
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == 'a' && f != 1){
                return false;
            }else if(s.charAt(i) == 'b'){
                f = 0;
            }
        }
        return true;
    }
}
