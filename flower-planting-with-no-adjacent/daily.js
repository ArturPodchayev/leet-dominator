/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    // prepare
    const listA = [];
	const listB = [];
    for ( let i = 0 ; i < A.length ; i++ ) {
        for ( let j = 0 ; j < A[0].length ; j++ ) {
            if ( A[i][j] ) listA.push([i, j]);
			if ( B[i][j] ) listB.push([i, j]);
        }
    }
    
    // the point is that every position in B can be moved to position A
    // And we just move it to see why kind of move is needed
    // and then aggregate by move! genius
    const cache = {};
    let max = 0;
    for ( let i = 0 ; i < listA.length ; i++ ) {
        for ( let j = 0 ; j < listB.length ; j++ ) {
            const str = `${listA[i][0]-listB[j][0]}_${listA[i][1]-listB[j][1]}`;
            cache[str] = cache[str] || 0;
            cache[str] += 1;
            max = Math.max( max, cache[str] );
        }
    }
    
    return max;
};
