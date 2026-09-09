class Solution {
    public long shiftDistance(String s, String t, int[] nextCost, int[] previousCost) {
        //so we have two choices for each letter either move forward or backwards
        //we make a hashmap with the letter associated with the letter
        //going forward
        HashMap<Character, Integer> alphaMap = new HashMap<>();
        int index = 0;
        long bestCost=0;
        for (char c='a'; c<='z'; c++) {
            alphaMap.put(c, index);
            index++;
        }
        
        //turning the strings into char arrays
        char[] sArray = new char[s.length()];
        char[] tArray = new char[s.length()];
        sArray = s.toCharArray();
        tArray = t.toCharArray();
        
        for (int i=0; i<sArray.length; i++) {
            if (sArray[i]!=tArray[i]) {
                long forwardCost = 0;
                long backCost = 0;
                //finding the index of the letter in the alphabet
                int placeS = alphaMap.get(sArray[i]);
                int placeT = alphaMap.get(tArray[i]);//get both indices so we only need to use ints
                //going forward in the alphabet
                while (placeS!=placeT) {
                    forwardCost+=nextCost[placeS];
                    placeS = (placeS+1)%26;
                    
                    
                }
                
                
                //going backwards in the alphabet
                //resetting placeS
                placeS = alphaMap.get(sArray[i]);
                while (placeS!=placeT) {
                    backCost+=previousCost[placeS];
                    placeS = (placeS-1+26)%26;
                    
                    
                    
                }
                
                
                if (backCost>forwardCost) {
                    bestCost+=forwardCost;
                }
                else {
                    bestCost+=backCost;
                }

                
            }
        }
        return bestCost;


    }
}
