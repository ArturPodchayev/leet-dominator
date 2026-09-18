public class Solution {
    public IList<string> MaxNumOfSubstrings(string s) {
        int[][] charFreqCount = new int[26][];

        for(int i=0; i<26; i++){
            charFreqCount[i] = new int[3] { i, -1, -1 };
        }

        // Store info about characters start and end
        for(int i=0; i<s.Length; i++){
            int idx = s[i] - 'a';

            if(charFreqCount[idx][1] == -1)
                charFreqCount[idx][1] = i;
            
            charFreqCount[idx][2] =  i;
        }

        int lastIndex = -1;  // lastString used's last index
        IList<string> res = new List<string>(); // Final Result
        int[] occurrences = new int[26]; // stores the last occurrence of the characters
        Array.Fill(occurrences, -2);

        for(int i=0; i<s.Length; i++){
            int idx = s[i] - 'a';
            int start = charFreqCount[idx][1], end = charFreqCount[idx][2];
            occurrences[idx] = i;

            if(charFreqCount[idx][1] < lastIndex || end > i) {
                continue;
            }

            // Tracks down the start of the substring if the characters
            // Scenario: wxwxyxzyz
            for(int j=0; j<26; j++){
                for(int k=0; k<26; k++){
                    if(occurrences[k] < start) continue;

                    start = Math.Min(start, charFreqCount[k][1]);
                }
            }
            
            if(start < lastIndex) continue;

            bool isValid = true;
            
            for(int j=0; j<26; j++){
                if(occurrences[j] >= start && charFreqCount[j][2] > i){
                    isValid = false;
                    break;
                }
            }

            if(isValid){
                res.Add(s.Substring(start, i - start + 1));
                lastIndex = i;
                occurrences = new int[26];
                Array.Fill(occurrences, -2);
            }
        }

        return res;
    }
}

/*

wwxwxyxzyz

*/
