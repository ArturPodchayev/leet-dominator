class Solution {

    public $piles;
    public $alice;
    public $bob;
    public $turn; // true - alice, false - bob

    function stoneGame($piles) {
        $this->piles = $piles;
        $this->alice = 0;
        $this->bob = 0;
        $this->turn = true;

        while(count($this->piles) !== 0)
        {
            if ($this->turn)
            {
                $this->alice += $this->findBestChoice();
            } else {
                $this->bob += $this->findBestChoice();
            }

            if (count($this->piles) === 1) 
            {
                if ($this->turn)
                    $this->alice += $this->findBestChoice();
                else 
                    $this->bob += $this->findBestChoice();

                break;
            }
        }

        return $this->alice > $this->bob;
    }

    function findBestChoice()
    {
        $last = count($this->piles) - 1;
        $first_b = $this->piles[0] > $this->piles[$last];

        $biggest = $first_b ? $this->piles[0] : $this->piles[$last];

        if ($first_b)
        {
            unset($this->piles[0]);
        } else
        {
            unset($this->piles[$last]);
        }

        return $biggest;
    }
}
