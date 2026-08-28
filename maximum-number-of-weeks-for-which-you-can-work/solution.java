class Solution {
    public long numberOfWeeks(int[] milestones) {
        int longestProject = 0;
        long totalProjects = 0;
        for (int milestone : milestones) {
            totalProjects += milestone;
            longestProject = Math.max(longestProject, milestone);
        }
        long otherProjects = totalProjects - longestProject;
        if (longestProject > otherProjects) {
            return (long)otherProjects * 2 + 1;
        } else {
            return (long)totalProjects;
        }
    }
}
