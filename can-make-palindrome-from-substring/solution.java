class Solution {
    public List<Boolean> canMakePaliQueries(String s, int[][] queries) {

        int[][] pre = new int[s.length()][26];
        int[] temp = new int[26];
        for(int i =0;i<s.length();i++){
            temp[s.charAt(i)-'a']++;
            for(int j =0;j<26;j++){
                pre[i][j] = temp[j];
            }
        }
        List<Boolean>list = new ArrayList<>();
        for(int[] q:queries){
            int cnt =0;
            int l = q[0];
            int r = q[1];
            int k = q[2];
            for(int i =0;i<26;i++){
                if(l-1>=0){
                    cnt += (pre[r][i] - pre[l-1][i])%2;
                }
                else{
                    cnt+= pre[r][i]%2;
                }
            }
            list.add(cnt/2<=k);
        }
        return list;
    }
}
