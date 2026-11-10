function kWeakestRows(mat: number[][], k: number): number[] {
let arr:number[][]=[], res:number[]=[];
for(let i:number=0;i<mat.length;i++){
    let c:number=0;
    for(let j:number=0;j<mat[0].length;j++){
        if(mat[i][j]==1){
            c++;
        }
    }
    arr.push([i,c]);
}
arr.sort((a,b)=>a[1]-b[1]);
for(let i:number=0;i<k;i++){
    res.push(arr[i][0]);
}
return res;    
};
