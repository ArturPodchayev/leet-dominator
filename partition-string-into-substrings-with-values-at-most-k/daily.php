class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function checkDivisibility(int $n): bool
    {
        $digitSum = array_sum(
            str_split($n),
        );

        $digitProduct = array_product(
            str_split($n)
        );

        $sumTwoValues = $digitSum + $digitProduct;

        return ($n % $sumTwoValues) == 0;
    }
}
