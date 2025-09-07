export default class Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
