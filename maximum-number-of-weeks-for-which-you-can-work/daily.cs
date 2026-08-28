public class Solution {
    // similar to medium: https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/
    //
    public string LexPalindromicPermutation(string s, string target) {
        var freq = new int[26];
        int[] current = new int[target.Length];

        for(int i =0;i<s.Length;i++){
            freq[s[i]-'a']++;
        }
 
        for(int i=0;i<freq.Length;i++){
            if(freq[i]%2==1){
                // multiple odd charters, not possible create palindrom
                if(current[current.Length/2]>0){
                    return ""; 
                }

                current[current.Length/2]= i;
                freq[i]--;
            }
        }

        return Backtrack(freq, target, 0, current, false);
    }

    public string Backtrack(int[] freq, string target, int idx, int[] current, 
        bool isGreater){
        if(idx==current.Length/2){
            var word = new string([.. current.Select(el=>(char)(el+'a'))]);

            // is Greater of the second_half is Greater
            return isGreater || word.CompareTo(target)>0 
                ? word
                : "";
        }

        for(int i=0;i<freq.Length;i++){
            if(freq[i]<2){
                continue;
            }

            // skip non-Greater strings, e
            // event if second half is greater - it is not palindrom
            if(!isGreater && i+'a'<target[idx]){
                continue;
            }

            current[idx]=i;
            current[^(idx+1)]=i;
            freq[i]-=2;

            var nextIsGreater = isGreater || i+'a'>target[idx];

            var result = Backtrack(freq, target, idx+1, current, nextIsGreater);

            if(result.Length>0){
                return result;
            }

            freq[i]+=2;
        }

        return "";
    }
}
