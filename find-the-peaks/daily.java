class Solution {
    public String smallestPalindrome(String s) {
        TreeMap<Character, Integer> map = new TreeMap<>();
        for (char ch : s.toCharArray()){
            map.put(ch, map.getOrDefault(ch, 0)+1);
        }

        StringBuilder str = new StringBuilder();
        char mid = ' ';
        boolean found = false;

        for (char c : map.keySet()){
            int freq = map.get(c);
            for(int i=0;i<freq/2;i++){
                str.append(c);
            }
            if(freq%2 == 1){
                mid = c;
                found = true;
            }
        }

        String reversed = new StringBuilder(str).reverse().toString();

        if (found){
            str.append(mid);
        }

        str.append(reversed);

        return str.toString();
    }
}
