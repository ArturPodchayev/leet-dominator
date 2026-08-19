public class Solution {
    public int MaxNumberOfFamilies(int n, int[][] reservedSeats) {
        var dict = new Dictionary<int, List<int>>();

        foreach (var seat in reservedSeats)
        {
            dict.TryAdd(seat[0], new List<int>());
            dict[seat[0]].Add(seat[1]);
        }

        var seatAvailable = 0; 

        foreach (var seat in dict)
        {
            if (!seat.Value.Contains(2) && !seat.Value.Contains(3) &&!seat.Value.Contains(4) 
             && !seat.Value.Contains(5) && !seat.Value.Contains(6) && !seat.Value.Contains(7) 
             && !seat.Value.Contains(8) && !seat.Value.Contains(9))
            {
                seatAvailable += 2;
                continue;
            }
  
            if (!seat.Value.Contains(2) && !seat.Value.Contains(3) &&!seat.Value.Contains(4) 
             && !seat.Value.Contains(5))
            {
                seatAvailable += 1;
                continue;
            }


            if (!seat.Value.Contains(6) && !seat.Value.Contains(7) &&!seat.Value.Contains(8) 
             && !seat.Value.Contains(9))
            {
                seatAvailable += 1;
                continue;
            }

             if (!seat.Value.Contains(4) && !seat.Value.Contains(5) &&!seat.Value.Contains(6) 
             && !seat.Value.Contains(7))
            {
                seatAvailable += 1; 
            }
        }

        var emptyRow = n - dict.Count; // dict count will give total row 
                                        //occupied so need to check 
                                        //row where two group are possible

        return (emptyRow * 2) + seatAvailable;

    }
}
