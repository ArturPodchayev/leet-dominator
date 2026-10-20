class Solution {
    public List<Integer> beautifulIndices(String s, String a, String b, int k) {
        int sLength = s.length();
        List<Integer> answer = new ArrayList<Integer>();
        Queue <Integer> line = new LinkedList<Integer>();
        int temp = -1, lastb = -1;
        for(int i = 0; i < sLength; i++){
            char c = s.charAt(i);
            if(c == b.charAt(0) && i <= sLength - b.length()){
                if(s.regionMatches(i, b, 0, b.length())){
                    lastb = i;
                    for(Integer lasta : line){
                        if(lastb != -1 && Math.abs(lasta - lastb) <= k && !answer.contains(lasta)){
                            answer.add(lasta);
                        }
                    }
                }
            }
            if(c == a.charAt(0) && i <= sLength - a.length()){
                if(s.regionMatches(i, a, 0, a.length())){
                    temp = i;
                    if(temp != -1 && lastb != -1 && Math.abs(temp - lastb) <= k){
                        answer.add(temp);
                    }
                    else{
                        line.add(temp);
                    }
                }
            }
        }
        return answer;
    }
}
