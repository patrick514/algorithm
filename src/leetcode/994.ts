function orangesRotting(grid: number[][]): number {
    let n = grid.length;
    let m = grid[0].length;
    let ans = 0;
    let q: [number, number][] = [];
    let fresh = 0;
    //新鲜橘子计数，初始腐烂 记坐标
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                q.push([i, j]);
            }
        }
    }

    while (fresh && q.length) {
        ans++;
        let tmp:[number,number][] = q;
        q = [];//每次都判断新腐烂的橘子

        for (const [x, y] of tmp) {
            for (const [i, j] of [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]]) {
                //注意，grid[i][j] 要放最后面，因为会下标越界
                if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 1) {
                    fresh--;
                    grid[i][j] = 2;
                    q.push([i, j]);
                }
            }
        }
    }

    return fresh ? -1 : ans;
};

orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])