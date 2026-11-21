class Solution {
    public boolean possiblyEquals(String s1, String s2) {
        //top-down DP
        int s1count = 0;
        int s2count = 0;
        int s1Ind=0;
        int s2Ind=0;
        Map<List<Integer>,Boolean> memo = new HashMap<>();
        return dp(s1,s2,s1Ind,s2Ind,s1count,s2count,memo);
    }
    public boolean dp(String s1, String s2,int s1Ind, int s2Ind, int s1count, int s2count, Map<List<Integer>,Boolean> memo){
        //base case
        if(s1Ind==s1.length() && s2Ind==s2.length() && s1count==0 && s2count==0) return true;
        if(s2Ind>=s2.length() && s2count==0) return false;
        if(s1Ind>=s1.length() && s1count==0) return false;
        
        // System.out.println("index:"+s1Ind+","+s2Ind+","+s1count+","+s2count);
        List<Integer> key = new ArrayList<>(Arrays.asList(s1Ind,s2Ind,s1count,s2count));
        if(memo.containsKey(key)) {
            // System.out.println("TEst");
            return memo.get(key);
        }
        boolean rst=false;

        //enum count
        if((s1Ind<s1.length() && Character.isDigit(s1.charAt(s1Ind)))&&(s2Ind<s2.length() && Character.isDigit(s2.charAt(s2Ind)))){
            int count1=0;
            for(int i=0;i<3 && s1Ind+i<s1.length() && Character.isDigit(s1.charAt(s1Ind+i));i++){
                count1 = count1*10 + (int)(s1.charAt(s1Ind+i)-'0');
                int count2=0;
                for(int j=0;j<3 && s2Ind+j<s2.length() && Character.isDigit(s2.charAt(s2Ind+j));j++){
                    count2 = count2*10 + (int)(s2.charAt(s2Ind+j)-'0');
                    rst = dp(s1,s2,s1Ind+i+1,s2Ind+j+1,s1count+count1,s2count+count2,memo);
                    if(rst) break;
                }
                if(rst) break;
            }        
        }else if((s1Ind<s1.length() && Character.isDigit(s1.charAt(s1Ind)))){
            int count1=0;
            for(int i=0;i<3 && s1Ind+i<s1.length() && Character.isDigit(s1.charAt(s1Ind+i));i++){
                count1 = count1*10 + (int)(s1.charAt(s1Ind+i)-'0');
                rst = dp(s1,s2,s1Ind+i+1,s2Ind,s1count+count1,s2count,memo);
                if(rst) break;
            }
        }else if(s2Ind<s2.length() && Character.isDigit(s2.charAt(s2Ind))){
            int count2=0;
            for(int i=0;i<3 && s2Ind+i<s2.length() && Character.isDigit(s2.charAt(s2Ind+i));i++){
                count2 = count2*10 + (int)(s2.charAt(s2Ind+i)-'0');
                rst = dp(s1,s2,s1Ind,s2Ind+i+1,s1count,s2count+count2,memo);
                if(rst) break;
            }
        }else{
            if(s1count>0 && s2count>0){
                int common = Math.min(s1count,s2count);
                rst=dp(s1,s2,s1Ind,s2Ind,s1count-common,s2count-common,memo);
            } else if(s1count>0){
                while(s1count>0 && s2Ind<s2.length() && !Character.isDigit(s2.charAt(s2Ind))){s1count--; s2Ind++;}
                rst = dp(s1,s2,s1Ind,s2Ind,s1count,0,memo);
            }else if(s2count>0){
                while(s2count>0 && s1Ind<s1.length() && !Character.isDigit(s1.charAt(s1Ind))){s2count--; s1Ind++;}
                rst = dp(s1,s2,s1Ind,s2Ind,0,s2count,memo);
            }else{
                if(s1Ind<s1.length() && s2Ind<s2.length() && !Character.isDigit(s1.charAt(s1Ind)) && !Character.isDigit(s2.charAt(s2Ind))){
                    if(s1.charAt(s1Ind) != s2.charAt(s2Ind))
                        rst=false;
                    else
                        rst = dp(s1,s2,s1Ind+1,s2Ind+1,0,0,memo);
                }
            }
    
        }
        
        memo.put(key,rst);
        return rst;
    }
}
