import { TreeNode } from './types';

export const treeToListBfs = <T>(tree?: TreeNode<T>[] | null): TreeNode<T>[] => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  let node;
  const result = [];
  const list = [...tree];

  while ((node = list.shift())) {
    result.push(node);
    node.children && list.push(...node.children);
  }

  return result;
};
