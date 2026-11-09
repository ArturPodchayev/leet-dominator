class Solution {

    /**
     * @param String[] $message
     * @param String[] $bannedWords
     * @return Boolean
     */
    function reportSpam($message, $bannedWords) {
        $hashWordsMap = [];
        $bannedWordsCounter = 0;

        foreach($bannedWords as $word){
            $hashWordsMap[$word] = true;
        }

        foreach($message as $word){
            if(isset($hashWordsMap[$word])){
                ++$bannedWordsCounter;
            };
            if($bannedWordsCounter > 1){
                return true;
            }
        }

        // O(m + n) ~ O (m+n)
        return false;
    }
}
