public class Solution {
    public int[] MinOperations(string boxes) {
        int len = boxes.Length;
        int[] sample = new int[len], left = new int[len], right = new int[len], res = new int[len];
        for (int i = 0; i < len; i++)
        {
            sample[i] = boxes[i] - '0'; // char to int
            if (i > 0)
                left[i] = sample[i - 1] + left[i - 1];// 1s number in left side
        }

        for (int i = len - 2; i >= 0; i--)
        {
            right[i] = sample[i+1]+right[i+1]; // 1s number in right side
        }

        // left 1s steps:
        for (int i = 1; i < len; i++) 
        {
            res[i] = res[i - 1] + left[i]; // 1s steps from left
        }
        
        // right 1s steps:
        int rightSteps = 0;
        for(int i = len-2; i >= 0; i--)
        {
            rightSteps += right[i];
            res[i] += rightSteps;
        }

        return res;
    }
}
