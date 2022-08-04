import { TreeNode } from './types';

export const listToTree = <T>(list?: TreeNode<T>[] | null): TreeNode<T>[] => {
  if (!Array.isArray(list)) {
    throw new TypeError('invalid parameters');
  }

  let idToNodeMap = list.reduce((map, node) => {
    map[node.id] = node;
    node.children = [];
    return map;
  }, {});

  return list.filter((node) => {
    idToNodeMap[node.pid] && idToNodeMap[node.pid].children.push(node);
    return !node.pid;
  });
};
