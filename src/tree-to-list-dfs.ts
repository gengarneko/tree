import { TreeNode } from './types';

export const treeToListDfs = <T>(tree?: TreeNode<T>[] | null): TreeNode<T>[] => {
  if (!Array.isArray(tree)) {
    throw new TypeError('invalid parameters');
  }

  let result = tree.map((node) => ({ ...node, level: 1 }));

  for (let i = 0; i < result.length; i++) {
    if (!result[i].children) continue;
    // add hierarchical information
    let list = result[i].children?.map((node) => ({ ...node, level: result[i].level + 1 })) ?? [];

    result.splice(i + 1, 0, ...list);
  }

  return result;
};
