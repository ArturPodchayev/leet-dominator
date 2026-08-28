function numberOfWeeks(milestones: number[]): number {
    const N = milestones.length;

    // Base case
    if (N < 2) {
        return N;
    }

    // Get total # of milestones
    // Get max milestones for a project
    let sum = 0;
    let max = 0;
    for (let i = 0; i < N; ++i) {
        sum += milestones[i];
        max = (max >= milestones[i]) ? max : milestones[i];
    }

    return (2*(max - 1) + 1 <= sum) 
    
    // If max project can pair its 
    // milestones with other projects,
    // then all milestones are possible
    ? sum 

    // Otherwise, max project has more milestones
    // than the rest of the projects combined. This
    // means all other project milestones (sum - max)
    // can pair (2*) with those from max project,
    // plus 1 unpaired milestone from max project
    : 2*(sum - max) + 1;
};
