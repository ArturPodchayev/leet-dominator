public class Solution {
    public int NumberWays(IList<IList<int>> hats) 
    {
        // hats, totalCount
        var data = new Dictionary<long, long>();
        data.Add(0, 1);

        long result = 0;
        var mod = (int) 1e9 + 7;

        var powers = new Dictionary<int, long>();
        var power = 1;
        for(int i = 0; i <= 11; ++i)
        {
            powers.Add(i, power);
            power *= 2;
        }

        var hatsToPeople = new Dictionary<int, HashSet<int>>();
        for(int i = 0; i < hats.Count; ++i)
        {   
            foreach(var hat in hats[i])
            {
                hatsToPeople.TryAdd(hat, new HashSet<int>());
                hatsToPeople[hat].Add(i);
            }
        }


        foreach(var hat in hatsToPeople.Keys)
        {
            var newData = new Dictionary<long, long>(data);

            foreach(var person in hatsToPeople[hat])
            {
                var index = powers[person];
                foreach(var (currentPeople, counter) in data)
                {
                    if((currentPeople & index) == 0)
                    {
                        var newIndex = currentPeople | index;
                        newData.TryAdd(newIndex, 0);
                        newData[newIndex] += counter;
                        newData[newIndex] %= mod;
                    }
                }
            }

            data = newData;
        }


        foreach(var (key, value) in data)
        {
            if(key == powers[hats.Count] - 1)
            {
                result += value;
                result %= mod;
            }
        }

        return (int)result;
    }
}
