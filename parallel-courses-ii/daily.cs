class Solution {
    public int SmallestUniqueSubarray(int[] nums) {
        int n = nums.Length;
        int low = 1;
        int high = n;
        int ans = n;
        while(low<=high){
            int mid = low + (high-low)/2;
            if(check(nums,mid)){     
                low = mid+1;
            }else{
                ans = mid;
                high = mid-1;
            }
        }
        return ans;
    }
    public bool check(int [] nums,int len){
        Dictionary<string,int> hm = new Dictionary<string,int>();
        int prime1 = 31;
        int prime2= 37;
        int mod1 = (int)1e9+7;
        int mod2 = (int)1e9+9;
        
        long power1 = 1;
        long power2 = 1;
        
        long hash1 = 0;
        long hash2 = 0;
        
        for(int i = 0;i<len;i++){
            hash1 = ((hash1 * prime1)%mod1 + nums[i])%mod1;
            hash2 = ((hash2 * prime2)%mod2 + nums[i])%mod2;
        }
        for(int i = 1;i<len;i++) {
            power1 = (power1 * prime1)%mod1;
            power2 = (power2 * prime2)%mod2;
        }
        hm.Add(hash1+"-"+hash2,1);
        for(int i = len;i<nums.Length;i++){
            
            hash1 = (((hash1 -(nums[i-len]*power1)) )%mod1 + mod1)%mod1;
            hash1 = ((hash1 * prime1)%mod1 + nums[i])%mod1;

            hash2 = (((hash2 -(nums[i-len]*power2)))%mod2 + mod2)%mod2;
            hash2 = ((hash2 * prime2)%mod2 + nums[i])%mod2;
            
           if(hm.ContainsKey(hash1+"-"+hash2)) 
            hm[hash1+"-"+hash2] = hm[hash1+"-"+hash2]+1;
            else 
            hm.Add(hash1+"-"+hash2,1);
        }
        foreach(var val in hm.Values){
            if(val==1) return false;
        }
        return true;
    }
}
