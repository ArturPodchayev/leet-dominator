function countPyramids(grid: number[][]): number {
    let count=0;
    for(let r=1;r<grid.length;r++){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0 && (grid[r-1][c-1]>0 )&& (grid[r-1][c]>0 )&&(grid[r-1][c+1]>0)){
                grid[r][c]=Math.min(grid[r-1][c-1],grid[r-1][c],grid[r-1][c+1])+1
                count+=(grid[r][c]-1);
            }
        }
    }
    for(let r=1;r<grid.length;r++){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0) grid[r][c]=1
        }
    }
    for(let r=grid.length-2;r>-1;r--){
        for(let c=1;c<grid[0].length-1;c++){
            if(grid[r][c]>0 && (grid[r+1][c-1]>0) && (grid[r+1][c]>0) && (grid[r+1][c+1]>0)){
                grid[r][c]=Math.min(grid[r+1][c-1],grid[r+1][c],grid[r+1][c+1])+1
                count+=(grid[r][c]-1)
            }
        }
    }
    return count;
};
