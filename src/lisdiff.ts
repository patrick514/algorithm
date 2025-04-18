function shouldSetAsProps(el, key, value) {
  // 如果 key 是 "form" 且元素是 INPUT 标签，则不作为属性设置
  if (key === "form" && el.tagName === "INPUT") return false;
  // 否则，检查 key 是否存在于元素的属性中
  return key in el;
}

function createRenderer(options) {
  const {
    createElement,
    insert,
    setElementText,
    patchProps,
    createText,
    setText,
  } = options;

  function mountElement(vnode, container, anchor) {
    // 创建元素并赋值给 vnode.el
    const el = (vnode.el = createElement(vnode.type));
    // 如果 vnode.children 是字符串，则设置元素文本内容
    if (typeof vnode.children === "string") {
      setElementText(el, vnode.children);
    } else if (Array.isArray(vnode.children)) {
      // 如果 vnode.children 是数组，则递归挂载子节点
      vnode.children.forEach((child) => {
        patch(null, child, el);
      });
    }

    // 处理 vnode 的 props
    if (vnode.props) {
      for (const key in vnode.props) {
        patchProps(el, key, null, vnode.props[key]);
      }
    }

    // 将元素插入到容器中
    insert(el, container, anchor);
  }

  function patchChildren(n1, n2, container) {
    // 如果新子节点是字符串
    if (typeof n2.children === "string") {
      // 如果旧子节点是数组，则卸载所有旧子节点
      if (Array.isArray(n1.children)) {
        n1.children.forEach((c) => unmount(c));
      }
      // 设置容器的文本内容为新子节点
      setElementText(container, n2.children);
    } else if (Array.isArray(n2.children)) {
      // 如果新子节点是数组，则调用 patchKeyedChildren 进行 diff
      patchKeyedChildren(n1, n2, container);
    } else {
      // 如果新子节点为空
      if (Array.isArray(n1.children)) {
        // 如果旧子节点是数组，则卸载所有旧子节点
        n1.children.forEach((c) => unmount(c));
      } else if (typeof n1.children === "string") {
        // 如果旧子节点是字符串，则清空容器的文本内容
        setElementText(container, "");
      }
    }
  }

  /**
   * patchKeyedChildren 快速 Diff 代码实现
   * @param n1 旧vnode
   * @param n2 新vnode
   * @param container 挂载点
   */
  function patchKeyedChildren(n1, n2, container) {
    const newChildren = n2.children;
    const oldChildren = n1.children;
    // 更新相同的前缀节点
    // 索引 j 指向新旧两组子节点的开头
    let j = 0;
    let oldVNode = oldChildren[j];
    let newVNode = newChildren[j];
    // while 循环向后遍历，直到遇到拥有不同 key 值的节点为止
    while (oldVNode.key === newVNode.key) {
      // 调用 patch 函数更新
      patch(oldVNode, newVNode, container);
      j++;
      oldVNode = oldChildren[j];
      newVNode = newChildren[j];
    }

    // 更新相同的后缀节点
    // 索引 oldEnd 指向旧的一组子节点的最后一个节点
    let oldEnd = oldChildren.length - 1;
    // 索引 newEnd 指向新的一组子节点的最后一个节点
    let newEnd = newChildren.length - 1;

    oldVNode = oldChildren[oldEnd];
    newVNode = newChildren[newEnd];

    // while 循环向前遍历，直到遇到拥有不同 key 值的节点为止
    while (oldVNode.key === newVNode.key) {
      // 调用 patch 函数更新
      patch(oldVNode, newVNode, container);
      oldEnd--;
      newEnd--;
      oldVNode = oldChildren[oldEnd];
      newVNode = newChildren[newEnd];
    }

    // 满足条件，则说明从 j -> newEnd 之间的节点应作为新节点插入
    if (j > oldEnd && j <= newEnd) {
      // 锚点的索引
      const anchorIndex = newEnd + 1;
      // 锚点元素
      const anchor =
        anchorIndex < newChildren.length ? newChildren[anchorIndex].el : null;
      // 采用 while 循环，调用 patch 函数逐个挂载新增的节点
      while (j <= newEnd) {
        patch(null, newChildren[j++], container, anchor);
      }
    } else if (j > newEnd && j <= oldEnd) {
      // j -> oldEnd 之间的节点应该被卸载
      while (j <= oldEnd) {
        unmount(oldChildren[j++]);
      }
    } else {
      // 构造 source 数组
      const count = newEnd - j + 1; // 新的一组子节点中剩余未处理节点的数量
      const source = new Array(count);
      source.fill(-1);

      const oldStart = j;
      const newStart = j;
      let moved = false;
      let pos = 0;
      const keyIndex = {};
      for (let i = newStart; i <= newEnd; i++) {
        keyIndex[newChildren[i].key] = i;
      }
      let patched = 0;
      for (let i = oldStart; i <= oldEnd; i++) {
        oldVNode = oldChildren[i];
        if (patched < count) {
          const k = keyIndex[oldVNode.key];
          if (typeof k !== "undefined") {
            newVNode = newChildren[k];
            patch(oldVNode, newVNode, container);
            patched++;
            source[k - newStart] = i;
            // 判断是否需要移动
            if (k < pos) {
              moved = true;
            } else {
              pos = k;
            }
          } else {
            // 没找到
            unmount(oldVNode);
          }
        } else {
          unmount(oldVNode);
        }
      }

      if (moved) {
        const seq = getSequence(source);
        // s 指向最长递增子序列的最后一个值
        let s = seq.length - 1;
        let i = count - 1;
        for (i; i >= 0; i--) {
          if (source[i] === -1) {
            // 说明索引为 i 的节点是全新的节点，应该将其挂载
            // 该节点在新 children 中的真实位置索引
            const pos = i + newStart;
            const newVNode = newChildren[pos];
            // 该节点下一个节点的位置索引
            const nextPos = pos + 1;
            // 锚点
            const anchor =
              nextPos < newChildren.length ? newChildren[nextPos].el : null;
            // 挂载
            patch(null, newVNode, container, anchor);
          } else if (i !== seq[s]) {
            // 说明该节点需要移动
            // 该节点在新的一组子节点中的真实位置索引
            const pos = i + newStart;
            const newVNode = newChildren[pos];
            // 该节点下一个节点的位置索引
            const nextPos = pos + 1;
            // 锚点
            const anchor =
              nextPos < newChildren.length ? newChildren[nextPos].el : null;
            // 移动
            insert(newVNode.el, container, anchor);
          } else {
            // 当 i === seq[s] 时，说明该位置的节点不需要移动
            // 并让 s 指向下一个位置
            s--;
          }
        }
      }
    }
  }

  function patchElement(n1, n2) {
    const el = (n2.el = n1.el);
    const oldProps = n1.props;
    const newProps = n2.props;

    // 更新新属性
    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        patchProps(el, key, oldProps[key], newProps[key]);
      }
    }
    // 移除旧属性
    for (const key in oldProps) {
      if (!(key in newProps)) {
        patchProps(el, key, oldProps[key], null);
      }
    }

    // 递归更新子节点
    patchChildren(n1, n2, el);
  }

  function unmount(vnode) {
    if (vnode.type === Fragment) {
      vnode.children.forEach((c) => unmount(c));
      return;
    }
    const parent = vnode.el.parentNode;
    if (parent) {
      parent.removeChild(vnode.el);
    }
  }

  function patch(n1, n2, container, anchor) {
    if (n1 && n1.type !== n2.type) {
      unmount(n1);
      n1 = null;
    }

    const { type } = n2;

    if (typeof type === "string") {
      if (!n1) {
        mountElement(n2, container, anchor);
      } else {
        patchElement(n1, n2);
      }
    } else if (type === Text) {
      if (!n1) {
        const el = (n2.el = createText(n2.children));
        insert(el, container);
      } else {
        const el = (n2.el = n1.el);
        if (n2.children !== n1.children) {
          setText(el, n2.children);
        }
      }
    } else if (type === Fragment) {
      if (!n1) {
        n2.children.forEach((c) => patch(null, c, container));
      } else {
        patchChildren(n1, n2, container);
      }
    }
  }

  function render(vnode, container) {
    if (vnode) {
      // 新 vnode 存在，将其与旧 vnode 一起传递给 patch 函数进行打补丁
      patch(container._vnode, vnode, container);
    } else {
      if (container._vnode) {
        // 旧 vnode 存在，且新 vnode 不存在，说明是卸载(unmount)操作
        unmount(container._vnode);
      }
    }
    // 把 vnode 存储到 container._vnode 下，即后续渲染中的旧 vnode
    container._vnode = vnode;
  }

  return {
    render,
  };
}

const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag);
  },
  setElementText(el, text) {
    el.textContent = text;
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor);
  },
  createText(text) {
    return document.createTextNode(text);
  },
  setText(el, text) {
    el.nodeValue = text;
  },
  patchProps(el, key, prevValue, nextValue) {
    if (/^on/.test(key)) {
      const invokers = el._vei || (el._vei = {});
      let invoker = invokers[key];
      const name = key.slice(2).toLowerCase();
      if (nextValue) {
        if (!invoker) {
          invoker = el._vei[key] = (e) => {
            console.log(e.timeStamp);
            console.log(invoker.attached);
            if (e.timeStamp < invoker.attached) return;
            if (Array.isArray(invoker.value)) {
              invoker.value.forEach((fn) => fn(e));
            } else {
              invoker.value(e);
            }
          };
          invoker.value = nextValue;
          invoker.attached = performance.now();
          el.addEventListener(name, invoker);
        } else {
          invoker.value = nextValue;
        }
      } else if (invoker) {
        el.removeEventListener(name, invoker);
      }
    } else if (key === "class") {
      el.className = nextValue || "";
    } else if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key];
      if (type === "boolean" && nextValue === "") {
        el[key] = true;
      } else {
        el[key] = nextValue;
      }
    } else {
      el.setAttribute(key, nextValue);
    }
  },
});

const Fragment = Symbol();
const VNode1 = {
  type: "div",
  children: [
    { type: "p", children: "1", key: 1 },
    { type: "p", children: "2", key: 2 },
    { type: "p", children: "3", key: 3 },
    { type: "p", children: "4", key: 4 },
    { type: "p", children: "6", key: 6 },
    { type: "p", children: "5", key: 5 },
  ],
};
renderer.render(VNode1, document.querySelector("#app"));

const VNode2 = {
  type: "div",
  children: [
    { type: "p", children: "1", key: 1 },
    { type: "p", children: "3", key: 3 },
    { type: "p", children: "4", key: 4 },
    { type: "p", children: "2", key: 2 },
    { type: "p", children: "7", key: 7 },
    { type: "p", children: "5", key: 5 },
  ],
};

setTimeout(() => {
  console.log("update");
  renderer.render(VNode2, document.querySelector("#app"));
}, 3000);

function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = ((u + v) / 2) | 0;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
