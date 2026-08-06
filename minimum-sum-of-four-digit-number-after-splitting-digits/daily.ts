function smallestNumber(n: number, t: number): number {
    while (true) {
        let temp = n;
        let product = 1;
        
        // Mathematically extract digits one by one
        while (temp > 0) {
            let digit = temp % 10; 
            
            // Early break: If any digit is 0, the product becomes 0.
            // 0 is divisible by any t, so we can stop calculating.
            if (digit === 0) {
                product = 0;
                break; 
            }
            
            product *= digit;
            // Shift to the next digit
            temp = Math.floor(temp / 10); 
        }
        
        // Check if the product of digits is divisible by t
        if (product % t === 0) {
            return n;
        }
        
        // Increment and test the next number
        n++;
    }
}
