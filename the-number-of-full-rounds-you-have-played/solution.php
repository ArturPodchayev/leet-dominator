class Solution {
    public function numberOfRounds(string $loginTime, string $logoutTime): int {
        $INtime = ((intval($loginTime[0]) * 10 + intval($loginTime[1])) * 60) + (intval($loginTime[3]) * 10 + intval($loginTime[4]));
        $OUTtime = ((intval($logoutTime[0]) * 10 + intval($logoutTime[1])) * 60) + (intval($logoutTime[3]) * 10 + intval($logoutTime[4]));

        if ($OUTtime < $INtime) {
            $OUTtime += 1440;
        }

        if ($INtime % 15 != 0) {
            $val = intdiv($INtime, 15);
            $INtime = ($val + 1) * 15;  
        }

        return abs($OUTtime - $INtime) / 15;
    }
}
