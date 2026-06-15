class Solution {
    public int wateringPlants(int[] plants, int capacity) {
        int l = plants.length;
        int c = 0;
        int d = capacity;
        for(int i=0; i<l; i++){
            if(plants[i] <= capacity){
                capacity -= plants[i];
                c++;
            }
            else{
                capacity = d - plants[i];
                c += 2*i + 1;
            }
        }
        return c;
    }
}
