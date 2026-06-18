public class Solution {
    public IList<string> SimplifiedFractions(int n) {
        string temp;
		IList<string> ans=new List<string>();
		for(int y=2;y<=n;y++){
			for(int x=1;x<y;x++){
				if(FindGCD(x,y)==1){temp=x+"/"+y;ans.Add(temp);}
			}
		}
		return ans;
    }
    public static int FindGCD(int n,int d){
		if(d%n==0){return n;}
		int r=d%n;
		return FindGCD(r,n);
	}
}
