/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function(nums) {
    var n=nums.length;
    var array=[];
    array.push(nums[0]);
    for(var i=1;i<n;i++){
        if(array[array.length-1] == nums[i]){
        array[array.length-1]=array[array.length-1]+nums[i];
        var x=array.length-2;
            while(x>=0){
                if(array[x] ==array[x+1]){
                    array[x]= array[x]+array[x+1];
                    array.pop();
                }else{
                    break;
                }
                x--;
            }
        }else {
            array.push(nums[i]);
        }
    }
 

    return array;
};
