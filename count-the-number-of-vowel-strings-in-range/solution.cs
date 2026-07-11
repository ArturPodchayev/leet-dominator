public class Solution {
    public int VowelStrings(string[] words, int left, int right) {
        Dictionary<char, char> vowels = new Dictionary<char, char>() {
            {'a', 'a'},
            {'e', 'e'},
            {'i', 'i'},
            {'o', 'o'},
            {'u', 'u'}
        };

        int vowelWords = 0;
        string currentWord = "";

        for (int i = left; i <= right; i++){
            currentWord = words[i];
            Console.WriteLine(currentWord);

            if(vowels.ContainsKey(currentWord[0]) && vowels.ContainsKey(currentWord[currentWord.Length - 1])){
                Console.WriteLine(currentWord[0].ToString() + currentWord[currentWord.Length - 1].ToString());
                vowelWords++;
            }
        }

        return vowelWords;
    }
}
