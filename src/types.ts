export type TreeNodeBase<T> = {
  children?: TreeNodeBase<T>[];
};

export type TreeNode<T> = TreeNodeBase<T> & {
  [key: string]: any;
};

export type TraverseParameter<T> = TreeNode<T>[];

export type TraverseFunction<T, V> = (node: TreeNode<T>) => TreeNode<V>;

export type TraverseResult<T> = TreeNode<T>[];

export type Traverse = <T, V>(tree?: TraverseParameter<T> | null, fn?: TraverseFunction<T, V>) => TraverseResult<V>;
