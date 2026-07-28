function findPeaks(mountain: number[]): number[] {
    const arr:number[]=[];
    for(let i=1;i<mountain.length-1;i++){
        if(mountain[i]>mountain[i-1] && mountain[i]>mountain[i+1])
          arr.push(i);
    }
    return arr;
};
