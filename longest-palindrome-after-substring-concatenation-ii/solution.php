class Solution {
    public function uniqueXorTriplets(array $a) : int {
        return ($n = sizeof($a)) < 4 ? [0,1,2,4][$n] : 1 << (strlen(decbin($n)));
    }
}
