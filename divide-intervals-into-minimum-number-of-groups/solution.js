/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    let start  = []
    let end = [];
    for(let [s, e] of intervals){
        start.push(s)
        end.push(e)
    }

    start.sort((a,b)=> a-b) // ascending sort
    end.sort((a,b)=> a-b) // ascending sort

    let i =0; let j=0;
    let group =0;
    let overLap=0;
    while(i < start.length){
        if(start[i] <= end[j]){
            group++;
            overLap = Math.max(overLap, group)
            i++
        }else{
            group--
            j++
        }
        
    }


    return overLap
};
