class Solution {
    public String[] createGrid(int m, int n) {
        String rt[]=new String[m];
        
            String t="",nt="";
        for(int i=0;i<n;i++){
            t+='.';
            if(i==n-1)
                nt+=".";
            else nt+="#";
        }
        rt[0]=t;
        for(int i=1;i<m;i++)rt[i]=nt;
        return rt;
    }
}
