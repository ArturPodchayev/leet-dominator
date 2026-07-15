/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    let currTime=0;
    let arr=new Array(n).fill(1);
    
    while(currTime<k){
        for(let i=1;i<n;i++){
            arr[i]+=arr[i-1];
            //console.log(arr[i])
            arr[i]=arr[i]%(Math.pow(10,9) + 7);
        }
        k--;
    }

    //console.log(arr);
    return arr[n-1]
};
