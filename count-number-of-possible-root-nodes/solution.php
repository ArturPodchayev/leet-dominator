<?php
class Solution {
    public $visited;
    public $g;
    public function __construct() {
        $this->visited = array();
        $this->g = array();
    }
    public function dp(&$adj, $node, $par) {
        if (isset($this->visited[$par][$node])) {
            return $this->visited[$par][$node];
        }
        $guess = isset($this->g[$par][$node]) ? $this->g[$par][$node] : 0;
        foreach ($adj[$node] as $i => $child) {
            if ($child != $par) {
                $guess += $this->dp($adj, $child, $node);
            }
        }
        return $this->visited[$par][$node] = $guess;
    }
    public function rootCount(&$edges, &$guesses, $k) {
        $n = count($edges);
        foreach ($guesses as $guess) {
            $this->g[$guess[0]][$guess[1]] = 1;
        }
        $adj = array();
        for ($i = 0; $i < $n; $i++) {
            $adj[$edges[$i][0]][] = $edges[$i][1];
            $adj[$edges[$i][1]][] = $edges[$i][0];
        }
        $count = 0;
        for ($i = 0; $i < $n + 1; $i++) {
            $guess = $this->dp($adj, $i, -1);
            if ($guess >= $k) {
                $count++;
            }
        }
        return $count;
    }
}
?>
