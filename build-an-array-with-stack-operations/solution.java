class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> result = new ArrayList<String>();
        int index=0;
        for(int i=1;i<=n;i++){
            if(target[index]==i){
                index++;
                result.add("Push");
            }else{
                result.add("Push");
                result.add("Pop");
            }
            if(index==target.length)
                break;
        }
        return result;
    }
}
