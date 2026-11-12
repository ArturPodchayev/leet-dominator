public class Solution {
    public bool IsTransformable(string s, string t) {
        var required = new int[10];
        var available = new int[10];
        int minAvailable = 10;
        int maxRequired = 0;

        for(var index = s.Length - 1; index >= 0; index --)
        {
            var (sValue, tValue) = SetValues(index);
            minAvailable = GetMinAvailable();
            maxRequired = GetMaxNecessary(sValue); 
            if(sValue > maxRequired) return false;
            Increase(sValue, tValue);
            if(HasNecessary(sValue))
            {
                if(sValue < minAvailable) return false;
                Decrease(sValue);
            }
            if(HasAvailable(tValue)) Decrease(tValue);
        }

        if(required.Sum() == 0) return true;

        return false;

        bool HasNecessary(int sValue)
        {
            return required[sValue] > 0;
        }

        bool HasAvailable(int tValue)
        {
            return available[tValue] > 0;
        }

        void Increase(int sValue, int tValue){
            available[sValue] ++;
            required[tValue] ++;
        }

        void Decrease(int value){
            required[value] --;
            available[value] --;
        }

        int GetMinAvailable()
        {
            var value = Array.FindIndex(available, 0, x => x > 0);
            if(value == -1) value = 0;
            return value;
        }

        int GetMaxNecessary(int sValue)
        {
            var value = Array.FindLastIndex(required,sValue, x => x > 0);
            if(value == -1) value = 9;
            return value;
        }

        (int, int) SetValues(int index)
        {
            return (s[index] - '0', t[index] - '0');
        }
    }
}
