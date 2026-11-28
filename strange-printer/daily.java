import java.util.*;
class Solution {
    public int maximumSaleItems(int[][] items, int budget) {
        int n=items.length;
        int[] cnt = new int[n+1];
        for(int[] it : items) cnt[it[0]]++;

        int[] M = new int[n+1];
        for(int f=1; f<=n; f++)
        {
            for(int m = f ;m<=n; m+=f){
                M[f] +=cnt[m];
            }
        }

        long[][] arr=new long[n][2];
        for(int i=0; i<n;i++){
            arr[i][0]= items[i][1];
             arr[i][1]= M[items[i][0]] -1;


        }

        Arrays.sort(arr,(a,b)-> Long.compare(a[0], b[0]));

        long pm = arr[0][0];
        long rem =budget;
        long ans=0;

        for(int i =0;i<n ; i++){
            long p= arr[i][0];
            long d= arr[i][1];
            if(p>=2* pm) break;
            long t = Math.min(d, rem/p);
            rem -= t* p;
            ans += 2 * t;
            if(t<d) break;


        }

        ans += rem/pm;
        return(int)ans;
        
    }
}
