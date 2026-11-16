class Solution {
    public String digitSum(String s, int k) {
        StringBuilder str = new StringBuilder(s);
        while(str.length() > k){
            int sum = 0;
            StringBuilder helper = new StringBuilder("");
            int counter = 0;
            for(int i = 0; i < str.length(); i++){
                sum += Character.getNumericValue(str.charAt(i));
                counter++;
                if(counter == k || i == str.length()-1){
                    helper.append(sum+"");
                    counter = 0;
                    sum = 0;
                }
            }
            str.setLength(0);
            str.append(helper);
            helper.setLength(0);
        }
        return str.toString();
    }
}
