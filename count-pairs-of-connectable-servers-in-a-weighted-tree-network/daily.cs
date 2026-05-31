public class Solution {
    public bool AsteroidsDestroyed(int mass, int[] asteroids) {
        Array.Sort(asteroids);
        long new_mass = mass;
        foreach(int ass in asteroids)
        {
            if(ass <= new_mass)
               new_mass += ass;
            else
               return false;
        }
        return true;
    }
}
