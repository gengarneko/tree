import { TreeNode } from './types';

export const treeFindPath = <T>(
  tree?: TreeNode<T>[] | null,
  func?: (node: TreeNode<T>) => boolean,
  path: any[] = [],
): any[] => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }
  if (!tree) return [];

  for (let node of tree) {
    path.push(node.id);

    if (func && func(node)) return path;

    if (node.children) {
      const findChild = treeFindPath(node.children, func, path);
      if (findChild.length) return findChild;
    }
    path.pop();
  }

  return [];
};
