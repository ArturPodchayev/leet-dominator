function minMoves(target: number, maxDoubles: number): number {
    let moves: number = 0;
    // move towards 1 instead of target
    while (target > 1 && maxDoubles > 0) {
        if (!(target % 2)) {
            target /= 2;
            maxDoubles--;
            moves++;
        }else{
            target--;
            moves++;
        }
    }


    if(target > 1){
        moves += target-1;
    }

    return moves;

};
