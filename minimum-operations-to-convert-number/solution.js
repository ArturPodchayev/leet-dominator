var minimumOperations = function (nums, start, goal) {
    let visited = new Set();
    let isValidOperation = (value) => {
        let isVaild = value >= 0 && value <= 1000 && !visited.has(value);

        isVaild && visited.add(value);
        return isVaild;
    };
    let queue = [start];
    let result = 0;

    while (queue.length) {
        let size = queue.length;
        let nextQueue = [];

        result += 1;
        for (let index = 0; index < size; index++) {
            let value = queue.pop();

            for (let num of nums) {
                let add = value + num;
                let minus = value - num;
                let xor = value ^ num;

                if (add === goal || minus === goal || xor === goal) return result;
                isValidOperation(add) && nextQueue.push(add);
                isValidOperation(minus) && nextQueue.push(minus);
                isValidOperation(xor) && nextQueue.push(xor);
            }
        }
        queue = nextQueue;
    }
    return -1;
};
