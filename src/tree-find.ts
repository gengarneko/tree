import { TreeNode } from './types';

export const treeFind = <T>(
  tree?: TreeNode<T>[] | null,
  func?: (node: TreeNode<T>) => boolean,
): TreeNode<T> | false => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  for (let node of tree) {
    if (func && func(node)) return node;

    if (node.children) {
      let result = treeFind(node.children, func);
      if (result) return result;
    }
  }
  return false;
};
