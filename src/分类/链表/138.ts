class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
//哈希表存储 原节点：复制节点的键值对，再对复制节点进行指向，在哈希表中获取对应源节点的值来指向，
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }
  const  map = new Map()
  let cur:_Node | null = head
  while(cur !== null){
    map.set(cur,new _Node(cur.val))
    cur = cur.next
  }
  cur = head
  while(cur !== null){
    map.get(cur).next = map.get(cur.next) || null
    map.get(cur).random = map.get(cur.random) || null
    cur = cur.next
  }
  return map.get(head)!;
}
