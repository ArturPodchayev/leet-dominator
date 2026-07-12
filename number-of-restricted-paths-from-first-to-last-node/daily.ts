function arrayRankTransform(arr: number[]): number[] {
    const n = arr.length; 
    if(n === 0) return arr;

    const sortedList = [...arr].sort((a, b) => a - b);
    const map = {};
    let rankCount = 1;

    // assigning rank to the map
    for(let i = 0; i < sortedList.length; i++){
        if(map[sortedList[i]]) {
            continue;
        }
        map[sortedList[i]] = rankCount;
        rankCount++;
    }

    // assign rank back to the orginal array
    for(let j = 0; j < arr.length; j++) {
        if(map[arr[j]]){
            arr[j] = map[arr[j]]
        }
    }

    return arr;
};
