class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[] $queries
     * @return Integer[]
     */
    function gcdValues($nums, $queries) {
        // Find the maximum number in the input list
        $maxNumber = max($nums);

        // Create a list to store prime numbers
        $primeNumbers = [];

        // Create a boolean array to mark composite numbers
        $compositeMarks = array_fill(0, $maxNumber + 1, false);

        // Generate prime numbers using the Sieve of Eratosthenes algorithm
        for ($possiblePrime = 2; $possiblePrime <= $maxNumber; $possiblePrime++) {
            if (!$compositeMarks[$possiblePrime]) {
                $primeNumbers[] = $possiblePrime;
                // Mark multiples of the prime number as composite
                for ($multiple = $possiblePrime; $multiple <= $maxNumber; $multiple += $possiblePrime) {
                    $compositeMarks[$multiple] = true;
                }
            }
        }

        // Create an array to store the count of numbers that have a certain GCD
        $gcdCounts = array_fill(0, $maxNumber + 1, 0);

        // Count the occurrences of each number in the input list
        foreach ($nums as $num) {
            $gcdCounts[$num]++;
        }

        // Count the occurrences of multiples of prime numbers
        foreach ($primeNumbers as $prime) {
            for ($multiple = floor($maxNumber / $prime); $multiple > 0; $multiple--) {
                $gcdCounts[$multiple] += $gcdCounts[$multiple * $prime];
            }
        }

        // Calculate the number of pairs that have a certain GCD
        for ($i = 0; $i <= $maxNumber; $i++) {
            $gcdCounts[$i] = $gcdCounts[$i] * ($gcdCounts[$i] - 1) / 2;
        }

        // Subtract the counts of multiples of prime numbers
        foreach ($primeNumbers as $prime) {
            for ($multiple = 0; $multiple <= floor($maxNumber / $prime); $multiple++) {
                $gcdCounts[$multiple] -= $gcdCounts[$multiple * $prime];
            }
        }

        // Calculate the cumulative sum of GCD counts
        for ($i = 1; $i <= $maxNumber; $i++) {
            $gcdCounts[$i] += $gcdCounts[$i - 1];
        }

        // Use binary search to find the index of each query in the GCD counts array
        return array_map(function($query) use ($gcdCounts) {
            return $this->binarySearch($gcdCounts, $query);
        }, $queries);
    }

// Binary search function
    function binarySearch($arr, $target) {
        $left = 0;
        $right = count($arr) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);

            if ($arr[$mid] <= $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return $left;
    }
> }
