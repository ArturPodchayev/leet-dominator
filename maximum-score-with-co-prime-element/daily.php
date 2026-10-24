class Solution {

    function returnShift($date){

        $months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        list($month, $day) = explode("-", $date);
        
        return $shift = array_sum(array_slice($months, 0, $month - 1)) + $day;
    }

    function countDaysTogether($arriveAlice, $leaveAlice, $arriveBob, $leaveBob) {

        $daysAlice = range($this->returnShift($arriveAlice), $this->returnShift($leaveAlice));

        $daysBob = range($this->returnShift($arriveBob), $this->returnShift($leaveBob));

        return count(array_intersect($daysAlice, $daysBob));
        
    }
}
