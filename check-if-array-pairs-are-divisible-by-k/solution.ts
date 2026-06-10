function canArrange(arr: number[], k: number): boolean {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            let number = arr[i]
            number = (k - (Math.abs(number) % k))
            obj[number % k] = (obj[number % k] || 0) + 1;
        } else {

            obj[arr[i] % k] = (obj[arr[i] % k] || 0) + 1;
        }

    }

    for (let key in obj) {

        let val = obj[key];
        if (Number(key) === (k - Number(key)) % k) {
            if (obj[key] % 2 === 1) return false
        }

        if (obj[(k - Number(key)) % k] === val) {
            
            delete obj[key];
            delete obj[(k - Number(key)) % k];
        } else {
            return false
        }
    }

    return true;
};
