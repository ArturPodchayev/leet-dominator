class ATM {
    private $notes;
    private $denominations;
    
    /**
     */
    function __construct() {
        // Initialize the ATM with zero banknotes for all 5 denominations
        $this->notes = [0, 0, 0, 0, 0];
        // Banknote denominations: $20, $50, $100, $200, $500
        $this->denominations = [20, 50, 100, 200, 500];
    }
  
    /**
     * @param Integer[] $banknotesCount
     * @return NULL
     */
    function deposit($banknotesCount) {
        // Add deposited banknotes to the ATM's inventory
        for ($i = 0; $i < 5; $i++) {
            $this->notes[$i] += $banknotesCount[$i];
        }
        return null;
    }
  
    /**
     * @param Integer $amount
     * @return Integer[]
     */
    function withdraw($amount) {
        // Initialize result array to track how many of each denomination to withdraw
        $result = [0, 0, 0, 0, 0];
        $tempAmount = $amount; // Use temporary variable to avoid modifying original amount
        
        // Try to withdraw starting from highest denomination ($500) to lowest ($20)
        for ($i = 4; $i >= 0; $i--) {
            $denomination = $this->denominations[$i];
            // If current denomination can be used and we have available banknotes
            if ($tempAmount >= $denomination && $this->notes[$i] > 0) {
                // Calculate maximum number of banknotes we can use of this denomination
                $count = min((int)($tempAmount / $denomination), $this->notes[$i]);
                $result[$i] = $count;
                $tempAmount -= $count * $denomination;
            }
        }
        
        // If we couldn't make the exact amount, return [-1]
        if ($tempAmount !== 0) {
            return [-1];
        }
        
        // Only update ATM inventory after successful withdrawal
        for ($i = 0; $i < 5; $i++) {
            $this->notes[$i] -= $result[$i];
        }
        
        return $result;
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * $obj = ATM();
 * $obj->deposit($banknotesCount);
 * $ret_2 = $obj->withdraw($amount);
 */
