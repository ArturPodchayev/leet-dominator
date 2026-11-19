class Solution {
    function minimizeSum($nums) {
        sort($nums);
        $n = count($nums);
        
        $opt1 =$nums[$n - 1] -$nums[2];
        $opt2 =$nums[$n - 2] -$nums[1];
        $opt3 =$nums[$n - 3] -$nums[0];
        
        return min($opt1, $opt2,$opt3);
    }
}
