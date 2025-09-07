export default interface TreeActions<T> {
  inOrder(): T[];
  preOrder(): T[];
  postOrder(): T[];
  levelOrder(): T[];
}
