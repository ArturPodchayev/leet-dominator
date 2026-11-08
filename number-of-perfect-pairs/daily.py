class Solution:
    def countServers(self, grid: List[List[int]]) -> int:
        communicable_servers_count = 0
        row_counts = [0] * len(grid[0])
        last_server_in_col = [-1] * len(grid)

        # First pass to count servers in each row and column
        for row in range(len(grid)):
            server_count_in_row = 0
            for col in range(len(grid[0])):
                if grid[row][col]:
                    server_count_in_row += 1
                    row_counts[col] += 1
                    last_server_in_col[row] = col

            # If there is more than one server in the row, increase the count
            if server_count_in_row != 1:
                communicable_servers_count += server_count_in_row
                last_server_in_col[row] = -1

        # Second pass to check if servers can communicate
        for row in range(len(grid)):
            if (
                last_server_in_col[row] != -1
                and row_counts[last_server_in_col[row]] > 1
            ):
                communicable_servers_count += 1
        return communicable_servers_count
