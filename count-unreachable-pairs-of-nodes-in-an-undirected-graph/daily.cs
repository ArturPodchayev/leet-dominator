public class Solution {
    private static readonly int[] PRIMES = [7, 5, 3, 2, 1];
    const bool DEBUG = false;

    public string SmallestNumber(string num, long t) {
        Dictionary<int, int> primes = FindPrimes(t);

        if (primes.Count == 0) return "-1";

        List<int> digitsMin = FindMin(primes);

        if(digitsMin.Count > num.Length) return string.Join("", digitsMin); 

        List<int> digitsTarget = FindValidMinTarget(num);

        if (DEBUG) Console.WriteLine("min number: " + string.Join("", digitsMin));
        if (DEBUG) Console.WriteLine("min target: " + string.Join("", digitsTarget));

        List<int> digits = AdjustForPrefix(digitsMin, digitsTarget, primes);

        Dictionary<int, int> primesWithPrefix = new(primes);
        bool increase = false;

        for (int i = 0; i < digits.Count; i++) {
            if (!increase) {
                if (digits[i] > digitsTarget[i]) break;
                if (digits[i] == digitsTarget[i]) {
                    Remove(primesWithPrefix, digits[i]);
                    continue;
                }
            }

            int remaining = digits.Count - i - 1;
            bool found = false;

            int jMin = digitsTarget[i];
            if (increase) jMin++;
            
            for (int j = jMin; j <= 9; j++) {
                Remove(primesWithPrefix, j);
                List<int> newDigits = FindMin(primesWithPrefix);
                
                if (newDigits.Count <= remaining) {
                    digits[i] = j;
                    if (j > digitsTarget[i]) {
                        if (DEBUG) Console.WriteLine($"for i: {i} ({j}), bigger found: " + string.Join("", newDigits));
                        return string.Join("", digits.Take(i + 1)) + new string('1', remaining - newDigits.Count) + string.Join("", newDigits);
                    } else {
                        digits.RemoveRange(i + 1, remaining);
                        if (remaining > newDigits.Count) {
                            digits.AddRange(Enumerable.Repeat(1, remaining - newDigits.Count));
                        }
                        digits.AddRange(newDigits);
                        found = true;

                        if (DEBUG) Console.WriteLine($"for i: {i} ({j}), equal found: " + string.Join("", digits));

                        break;
                    }
                }
                Add(primesWithPrefix, j);
            }

            if (!found) {
                if (i == 0) return new string('1', num.Length - digitsMin.Count + 1) + string.Join("", digitsMin);

                Add(primesWithPrefix, digits[i - 1]);
                increase = true;

                i -= 2;
                if (DEBUG) Console.WriteLine("go back: " + (i + 1));
            } else {
                increase = false;
            }
        }

        return string.Join("", digits);
    }

    private Dictionary<int, int> FindPrimes(long t) {
        Dictionary<int, int> tCounts = PRIMES.ToDictionary(n => n, _ => 0);
        foreach (int prime in PRIMES.Where(p => p > 1)) {
            while (t % prime == 0) {
                t /= prime;
                tCounts[prime]++;
            }
        }

        if (t != 1) return new();

        return tCounts;
    }

    private Dictionary<int, int> FindDigitPrimes(List<int> digits) {
        Dictionary<int, int> tCounts = PRIMES.ToDictionary(n => n, _ => 0);
        foreach (int digit in digits) {
            Add(tCounts, digit);
        }
        return tCounts;
    }

    private void Add(Dictionary<int, int> tCounts, int digit) {
        switch (digit)
        {
            case 9:
                tCounts[3] += 2;
                break;
            case 8:
                tCounts[2] += 3;
                break;
            case 7:
                tCounts[7]++;
                break;
            case 6:
                tCounts[3]++;
                tCounts[2]++;
                break;
            case 5:
                tCounts[5]++;
                break;
            case 4:
                tCounts[2] += 2;
                break;
            case 3:
                tCounts[3]++;
                break;
            case 2:
                tCounts[2]++;
                break;
            case 1:
                tCounts[1]++;
                break;
        }
    }

    private void Remove(Dictionary<int, int> tCounts, int digit) {
        switch (digit)
        {
            case 9:
                tCounts[3] -= 2;
                break;
            case 8:
                tCounts[2] -= 3;
                break;
            case 7:
                tCounts[7]--;
                break;
            case 6:
                tCounts[3]--;
                tCounts[2]--;
                break;
            case 5:
                tCounts[5]--;
                break;
            case 4:
                tCounts[2] -= 2;
                break;
            case 3:
                tCounts[3]--;
                break;
            case 2:
                tCounts[2]--;
                break;
            case 1:
                tCounts[1]--;
                break;
        }
    }

    private List<int> ToList(Dictionary<int, int> tCounts) {
        return tCounts.Keys
            .OrderBy(n => n)
            .Where(n => tCounts[n] > 0)
            .SelectMany(n => Enumerable.Repeat(n, tCounts[n]))
            .ToList();
    }

    private List<int> FindMin(Dictionary<int, int> tCountsOld) {
        Dictionary<int, int> tCounts = new(tCountsOld);

        if (tCounts[2] >= 3) {
            tCounts[8] = tCounts[2] / 3;
            tCounts[2] = tCounts[2] % 3;
        }

        if (tCounts[2] >= 1 && tCounts[3] >= 1 && tCounts[3] % 2 == 1) {
            int min = Math.Min(tCounts[2], tCounts[3]);
            tCounts[6] = 1;
            tCounts[2]--;
            tCounts[3]--;
        }

        if (tCounts[2] >= 2) {
            tCounts[4] = tCounts[2] / 2;
            tCounts[2] = tCounts[2] % 2;
        }

        if (tCounts[3] >= 2) {
            tCounts[9] = tCounts[3] / 2;
            tCounts[3] = tCounts[3] % 2;
        }

        if (tCounts[2] == 1 && tCounts[3] == 1) {
            tCounts[6] = 1;
            tCounts[2]--;
            tCounts[3]--;
        }

        return ToList(tCounts);
    }

    private List<int> FindValidMinTarget(string num) {
        List<int> digits = num.Select(n => n - '0').ToList();

        bool zero = false;
        for (int i = 0; i < digits.Count; i++) {
            if (digits[i] == 0) {
                zero = true;
            }

            if (zero) {
                digits[i] = 1;
            }
        }

        return digits;
    }

    private List<int> AdjustForPrefix(List<int> digitsMin, List<int> digitsTarget, Dictionary<int, int> primes) {
        int skip = 0;
        List<int> digitsWithPrefix = new(digitsMin);
        Dictionary<int, int> primesWithPrefix = new(primes);

        while (digitsTarget.Count - skip > digitsWithPrefix.Count) {
            List<int> missing = digitsTarget.Skip(skip).Take(digitsTarget.Count - skip - digitsWithPrefix.Count).ToList();
            Dictionary<int, int> primes2 = FindDigitPrimes(missing);

            foreach (int prime in PRIMES) {
                primesWithPrefix[prime] -= primes2[prime];
            }

            skip += missing.Count;
            digitsWithPrefix = FindMin(primesWithPrefix);

            if (DEBUG) Console.WriteLine("min number adjusted length: " + string.Join("", digitsWithPrefix));
        }

        if (digitsTarget.Count > digitsWithPrefix.Count) {
            int[] missing = digitsTarget.Take(digitsTarget.Count - digitsWithPrefix.Count).ToArray();
            digitsWithPrefix.InsertRange(0, missing);
            if (DEBUG) Console.WriteLine("min number adjusted length with prefix: " + string.Join("", digitsWithPrefix));
        }

        return digitsWithPrefix;
    }
}
