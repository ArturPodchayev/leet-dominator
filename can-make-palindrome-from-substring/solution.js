var canMakePaliQueries = function(s, queries) {
    const prefMap=[{[s[0]]:1}];
    for(let i=1;i<s.length;i++){
        const copyMap={...prefMap[i-1]};
        copyMap[s[i]]=copyMap[s[i]]+1||1;
        prefMap[i]=copyMap;
    }

    const getPrefMap=(l,r)=>{
        const left=prefMap[l-1]||{}, right=prefMap[r];
        const res={};
        for(const [k,v] of Object.entries(right)){
            res[k]=v-(left[k]||0);
        }
        return res;
    }

    const canMakePalindrome=(map,k)=>{
        const ods=Object.keys(map).reduce((acc,curr)=>acc+(map[curr]%2!==0?1:0),0); // number of odds occurrences
        if(ods-(k*2)<=1) return true; // check if we can correct it
        return false; // otherwise return false
    }

    const ans=[];
    for(const [from, to, k] of queries){
        const map=getPrefMap(from,to);
        ans.push(canMakePalindrome(map,k));
    }
    return ans;
};
