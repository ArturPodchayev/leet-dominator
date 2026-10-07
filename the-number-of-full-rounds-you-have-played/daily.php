class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    private $validExpressions = [];

    private function recurse(
        $s,
        $index,
        $leftCount,
        $rightCount,
        $leftRem,
        $rightRem,
        $expression
    ) {
        // If we reached the end of the string, just check if the resulting expression is
        // valid or not and also if we have removed the total number of left and right
        // parentheses that we should have removed.
        if ($index == strlen($s)) {
            if ($leftRem == 0 && $rightRem == 0) {
                if (!in_array($expression, $this->validExpressions)){
                    $this->validExpressions[] = $expression;
                }
            }
        } else {
            $character = $s[$index];
            $length = strlen($expression);

            // The discard case. Note that here we have our pruning condition.
            // We don't recurse if the remaining count for that parenthesis is == 0.
            if (($character == '(' && $leftRem > 0) || ($character == ')' && $rightRem > 0)) {
                $this->recurse(
                    $s,
                    $index + 1,
                    $leftCount,
                    $rightCount,
                    $leftRem - ($character == '(' ? 1 : 0),
                    $rightRem - ($character == ')' ? 1 : 0),
                    $expression
                );
            }

            $expression .= $character;

            // Simply recurse one step further if the current character is not a parenthesis.
            if ($character != '(' && $character != ')') {
                $this->recurse($s, $index + 1, $leftCount, $rightCount, $leftRem, $rightRem, $expression);
            } elseif ($character == '(') {
                // Consider an opening bracket.
                $this->recurse($s, $index + 1, $leftCount + 1, $rightCount, $leftRem, $rightRem, $expression);
            } elseif ($rightCount < $leftCount) {
                // Consider a closing bracket.
                $this->recurse($s, $index + 1, $leftCount, $rightCount + 1, $leftRem, $rightRem, $expression);
            }

            // Delete for backtracking.
            $expression = substr($expression, 0, $length);
        }
    }

    public function removeInvalidParentheses($s) {
        $left = 0;
        $right = 0;

        // First, we find out the number of misplaced left and right parentheses.
        for ($i = 0; $i < strlen($s); $i++) {
            // Simply record the left one.
            if ($s[$i] == '(') {
                $left++;
            } elseif ($s[$i] == ')') {
                // If we don't have a matching left, then this is a misplaced right, record it.
                $right = $left == 0 ? $right + 1 : $right;

                // Decrement count of left parentheses because we have found a right
                // which CAN be a matching one for a left.
                $left = $left > 0 ? $left - 1 : $left;
            }
        }

        $this->recurse($s, 0, 0, 0, $left, $right, "");
        return $this->validExpressions;
    }
}
