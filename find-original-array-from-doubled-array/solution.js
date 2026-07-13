var findOriginalArray = function(changed) {
    changed.sort((a,b) => a-b);
    let result = [];
    let map = new Map();
    
    for(let i = 0; i < changed.length; i++){
        let c = changed[i];a
        let o = map.get(c/2);
        
        if(c % 2 === 1 || !o){
            map.set(c, (map.get(c) ?? 0) + 1);
        }
        else{
            result.push(c/2);
            map.set(c/2, o - 1);
        }
    }
 
    return changed.length / result.length === 2 ? result : [];
};
