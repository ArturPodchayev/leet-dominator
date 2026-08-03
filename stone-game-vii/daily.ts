const recurse = (piles: number[], idx: number, mem: any, turn: number) => {
    let k = `${idx},${turn}`;
    if(mem[k] !== undefined) return mem[k];
    let myVal;
    let oppoVal;
    let curVal = 0;
    // if(turn === 0) console.log(idx)
    // if(turn === 1) console.log(idx)
    for(let i=1; i<=3; i++) {
        if(idx+i-1 === piles.length) break;
        curVal+=piles[idx+i-1];
        // console.log(curVal)
        let next = recurse(piles, idx+i, mem, 1-turn);
        if(myVal === undefined) {
            myVal = curVal + next[turn];
            oppoVal = next[1-turn];
        } else {
            myVal = myVal > curVal + next[turn] ? myVal : curVal + next[turn];
            oppoVal = myVal > curVal + next[turn] ? oppoVal : next[1-turn];
            // console.log(myVal, oppoVal, next[0], next[1])
        }
    }
    mem[k] = []
    mem[k][turn] = myVal || 0;
    mem[k][1-turn] = oppoVal || 0;
    return mem[k];
}

function stoneGameIII(stoneValue: number[]): string {
    let mem = {};
    let res = recurse(stoneValue, 0, mem, 0);
    // console.log(mem);
    if(res[0] > res[1]) return "Alice";
    if(res[0] < res[1]) return "Bob";
    return "Tie";
};
