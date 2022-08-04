import { Traverse, TreeNode } from './types';

export const dfsTraverseWithRecursive: Traverse = <T, V>(
  tree?: TreeNode<T>[] | null,
  fn?: (node: TreeNode<T>) => TreeNode<V>,
) => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  return tree.map((node) => {
    const newNode = fn ? fn(node) : node;

    if (node.children?.length) {
      dfsTraverseWithRecursive(node.children, fn);
    }

    return newNode;
  });
};
