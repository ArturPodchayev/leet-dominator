const m int64 = 1000000007

func sumOfNumbers(l int, r int, k int) int {
    var s int64 = 0
    for i := l; i <= r; i++ {
        s += int64(i)
    }

    q := binPow(int64(r-l+1), k-1)
    d := bin111(k)
    e := (s * q) % m
    result := (e * d) % m
    return int(result)
}

func bin111(k int) int64 {
    if k == 1 {
        return 1
    }
    if k%2 == 0 {
        a := bin111(k / 2)
        d := binPow(10, k/2)
        return ((a*d)%m + a) % m
    }
    a := bin111(k - 1)
    d := binPow(10, k-1)
    return (a + d) % m
}

func binPow(a0 int64, n0 int) int64 {
    a := a0 % m
    if a < 0 {
        a += m
    }
    n := n0
    var res int64 = 1
    for n > 0 {
        if (n & 1) != 0 {
            res = (res * a) % m
        }
        a = (a * a) % m
        n >>= 1
    }
    return res
}
