function maxDepthAfterSplit(seq: string): number[] {
    let depth = 0;
    const res: number[] = [];

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            depth++;              // '(' opens a new level
            res[i] = depth % 2;
        } else {
            res[i] = depth % 2;   // ')' still sits on the current level
            depth--;
        }
    }

    return res;
}
