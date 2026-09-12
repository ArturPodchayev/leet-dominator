class Solution
{
    public function colorTheArray(int $n, array $queries): array
    {
        $adjacent = 0;
        $answer = array_fill(0, count($queries), 0);
        $colors = array_fill(0, $n + 2, 0);
        foreach ($queries as $i => $query) {
            list($j, $c) = $query;
            $j++;
            if ($c !== $colors[$j]) {
                $adjacent += $c === $colors[$j-1] ? 1 : 0;
                $adjacent += $c === $colors[$j+1] ? 1 : 0;
                $adjacent -= $colors[$j] !== 0 && $colors[$j] == $colors[$j-1] ? 1 : 0;
                $adjacent -= $colors[$j] !== 0 && $colors[$j] == $colors[$j+1] ? 1 : 0;
            }
            $colors[$j] = $c;
            $answer[$i] = $adjacent;
        }
        return $answer;
    }
}
