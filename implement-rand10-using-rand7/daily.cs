public class Solution {
    public int TotalWaviness(int num1, int num2) {
        int count=0;
        for(int i=num1;i<=num2;i++)
        {
            count+=check(i);
        }
        return count;
    }
    public int check(int number)
    {
        string str=number.ToString();
        int count =0;
        for(int i=1;i<str.Length-1;i++)
        {
            if((str[i]>str[i+1]&&str[i]>str[i-1])
            ||(str[i]<str[i+1]&&str[i]<str[i-1]))
            count ++;
        }
        return count ;
    }
}
