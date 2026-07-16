function buildArray(target: number[], n: number): string[] {
  const ans: string[] = [];
  let start = 1;

  for (let i = 0; i < target.length; i++) {
    // Calculate how many numbers are missing between current stream and target
    const diff = target[i] - start;
    
    // Add Push/Pop pairs for the missing numbers
    helper(ans, diff);
    
    // Push the actual target number
    ans.push("Push");
    
    // Update the start of the stream to the next number
    start = target[i] + 1;
  }

  return ans;
};

// Helper to add Push/Pop pairs efficiently
function helper(ans: string[], d: number) {
  for (let c = 1; c <= d; c++) {
    ans.push("Push", "Pop");
  }
}
