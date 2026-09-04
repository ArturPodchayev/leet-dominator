var firstStableIndex = function(arr, k) {

    let n=arr.length, maxVals=Array.from({length:n},()=>-Infinity),minVal=Array.from({length:n},()=>Infinity)
    maxVals[0]=arr[0]>maxVals[0]?arr[0]:-Infinity
    let minIndex=null
    for(let i=1;i<n;i++){
        
        if(arr[i]>maxVals[i-1]){
           maxVals[i]=arr[i] 
        }else{
            maxVals[i]=maxVals[i-1]
        }
    }

    minVal[n-1]=arr[n-1]<minVal[n-1]?arr[n-1]:Infinity

    for(let i=n-2;i>=0;i--){
        
        if(arr[i]<minVal[i+1]){
           minVal[i]=arr[i] 
        }else{
            minVal[i]=minVal[i+1]
        }
    }

    for(let i=0;i<n;i++){
        let stability=maxVals[i]-minVal[i]
        if(stability<=k){
            if(minIndex==null){
                minIndex=i
            }else if(i<minIndex){
                minIndex=i
            }
        }
    }

    return minIndex==null?-1:minIndex
    
};
