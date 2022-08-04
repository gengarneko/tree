import { TreeNode } from './types';

export const treeToListDfsWithRecurse = <T>(tree?: TreeNode<T>[] | null, result: TreeNode<T>[] = []): TreeNode<T>[] => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  if (!tree?.length) return [];

  tree.forEach((node) => {
    result.push(node);
    node.children && treeToListDfsWithRecurse(node.children, result);
  });

  return result;
};
