class Solution {
    public String reformatNumber(String number) {
        number = number.replace(" ","");
        number = number.replace("-","");
        int n = number.length();
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while(n - i > 4){
            sb.append(number.substring(i, i+3));
            sb.append("-");
            i += 3;
        }
        if(n - i == 4){
            sb.append(number.substring(i, i + 2));
            sb.append("-");
            sb.append(number.substring(i + 2));
        }
        else{
            sb.append(number.substring(i));
        }

        return sb.toString();
    }
}
