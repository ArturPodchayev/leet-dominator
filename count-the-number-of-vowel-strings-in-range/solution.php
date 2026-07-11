class Solution {

    /**
     * @param String[] $words
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function vowelStrings($words, $left, $right) {
        $count = 0;

        for(; $left <= $right; $left++)
        {
            $temp = 0;
            foreach(['a', 'e', 'i', 'o', 'u'] as $vowel)
            {
                $temp += ($words[$left][0] == $vowel) + ($words[$left][-1] == $vowel);

                if($temp == 2)
                {
                    $count++;
                    break;
                }   
            }
        }

        return $count;
    }
}
