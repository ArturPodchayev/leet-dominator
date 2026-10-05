function shortestSubstrings(arr: string[]): string[] {
    const rightSet = new Array(arr.length + 1);
    rightSet[arr.length] = new Set();
    
    function addToSet(word: string, set: Set<string>): Set<string>{
        const update = new Set(set);
        for(let i = 0; i < word.length; i++){
            for(let j = i + 1; j <= word.length; j++){
                const sub = word.substring(i, j);
                update.add(sub);
            }
        }
        return update;
    }

    for(let i = arr.length - 1; i >= 0; i--){
        rightSet[i] = addToSet(arr[i], rightSet[i + 1]);
    }

    const output = new Array(arr.length);
    let leftSet = new Set();

    function customCompare(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length; // Compare by length if lengths are different
        }else{
            return a.localeCompare(b); // Compare lexicographically if lengths are the same
        }
    }

    for(let i = 0; i < arr.length; i++){
        const array = new Array();
        const word = arr[i];
        for(let j = 0; j < word.length; j++){
            for(let k = j + 1; k <= word.length; k++){
                const sub = word.substring(j, k);
                if(!leftSet.has(sub) && !rightSet[i + 1].has(sub)){
                    array.push(sub);
                }
                leftSet.add(sub);
            }
        }
        if(array.length === 0){ output[i] = ""; continue};
        array.sort(customCompare);
        output[i] = array[0];
    }
    
    return output;
};
