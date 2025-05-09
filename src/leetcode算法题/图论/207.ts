
// //dfs 深度优先搜索
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//     //创建了一个长度为 numCourses 的数组，每个元素是一个空数组 []。
//     const g:number[][] = Array.from({length : numCourses},()=>[]);
//     for(const [a,b] of prerequisites){
//         g[b].push(a);
//     }

//     let color:number[] = Array(numCourses).fill(0);
//     function dfs(x){
//         color[x] = 1;
//         for(const y of g[x]){
//             //从未访问过的邻居节点 y 的递归搜索中找到了环。
//             if(color[y] === 1 || (color[y] === 0 && dfs(y))){
//                 return true;
//             }
//         }
//         color[x] = 2;
//         return false;
//     }

//     for(let i = 0;i<numCourses;i++){
//         //确保只有未访问过的节点才会调用 dfs
//         if(color[i] === 0 && dfs(i)){
//             return false;
//         }
//     }
//     return true;
// };

//bfs 广度优先搜索
function canFinish(numCourses, prerequisites) {
    // 构造邻接表和入度表
    const g:number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) {
        g[b].push(a); // b 指向 a
        inDegree[a]++; // a 的入度增加
    }

    // 将所有入度为 0 的节点入队
    const queue:number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // 拓扑排序
    let count = 0;
    while (queue.length > 0) {
        const x:number = queue.shift()!;
        count++;
        for (const y of g[x]) {
            inDegree[y]--; // y 的入度减 1
            if (inDegree[y] === 0) queue.push(y); // 如果入度变为 0，入队
        }
    }

    // 如果完成的课程数量等于总课程数，则无环
    return count === numCourses;
}
