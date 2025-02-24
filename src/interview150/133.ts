import { _Node } from "../_node133";


function cloneGraph(node: _Node | null): _Node | null {
    // 用map 存储已访问的 节点
    let visited = new Map<number,_Node>()
    if(!node){
        return node
    }

    const dfs = (p:_Node):_Node  => {
        //节点已克隆  直接返回克隆节点
        if (visited.has(p.val)) {
            return visited.get(p.val)!;
        }
        const cloneNode : _Node= new _Node(p.val)
        visited.set(p.val,cloneNode)

        // 递归克隆邻居节点
        for(const neighbor of p.neighbors){
            cloneNode.neighbors.push(dfs(neighbor))
        }
        return cloneNode
    }
    return  dfs(node)

};

// 创建一个图
const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// 克隆图
const clonedGraph = cloneGraph(node1);

// 打印结果：应该返回一个深拷贝的图
console.log(clonedGraph);
