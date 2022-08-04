import { Traverse, TreeNode } from './types';

export const bfsTraverse: Traverse = <T, V>(tree?: TreeNode<T>[] | null, fn?: (node: TreeNode<T>) => TreeNode<V>) => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  let node;
  const clonedTree = [...tree];
  const list = [...clonedTree];

  while ((node = list.shift())) {
    fn?.(node);
    node.children && list.push(...node.children);
  }

  return clonedTree;
};
