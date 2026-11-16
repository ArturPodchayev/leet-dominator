function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let sum = 0
        let tempStr = ''
        for (let i = 0; i < s.length; i += k) {
            let num = s.slice(i, k+i)
            sum = String(num).split('').reduce((acc, cur) => +acc + +cur, 0)
            tempStr += String(sum)
        }
        s = tempStr
    }
    return s
};
