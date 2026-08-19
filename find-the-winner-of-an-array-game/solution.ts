function getWinner(arr: number[], k: number): number {
    let c: number = 0
    let currWinner: number = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[currWinner] > arr[i]) c++
        else{
            c = 1
            currWinner = i
        }
        if(c === k) return arr[currWinner]
    }

    return arr[currWinner]
};
