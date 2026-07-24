class Solution {
    public String sortSentence(String s) {
        String[] arr = s.split(" ");
        int i=0;
        while(i<arr.length){    // Cycle sort
            int x = arr[i].charAt(arr[i].length()-1) - '0';
            int correct = x-1;
            if(i != correct){ // swap
                String temp = arr[i];
                arr[i] = arr[correct];
                arr[correct] = temp;
            }
            else
                i++;
        }
        StringBuilder sb = new StringBuilder();
        for(int j=0;j<arr.length;j++){
            sb.append(arr[j].substring(0,arr[j].length()-1));
            if(j!=arr.length-1)
                sb.append(" ");
        }
        return sb.toString();
    }
} 
