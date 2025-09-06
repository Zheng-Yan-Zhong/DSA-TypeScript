import BST from "./binary-search-tree.ts";
import Node from "./Node.ts";
class AvlTree<T> extends BST<T> {
  constructor() {
    super();
  }

  insert(value: T) {
    this.insertByRecursion(value);
    console.log(this.getNodeHeight(this.root));
  }

  getNodeHeight(node: Node<T> | null): number {
    if (!node) return 0;
    return (
      1 +
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
    );
  }

  getBalanceFactor(node: Node<T> | null) {
    if (!node) return 0;
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  rotateRight(node: Node<T>): Node<T> {
    if (!node.left) return node; // The node doesn't have a left subtree, therefore, can't do rotation

    // move to the top
    const newRoot = node.left;
    // store pre right subtree
    const preRightNode = newRoot.right;

    // rotating, pre top becomes to new top's right subtree
    newRoot.right = node;
    node.left = preRightNode;

    return newRoot;
  }

  rotateLeft(node: Node<T>): Node<T> {
    if (!node.right) return node; // The node doesn't have a right subtree, therefore, can't do rotation

    // move to the top
    const newRoot = node.right;
    // store pre right subtree
    const preLeftNode = newRoot.left;

    // rotating, pre top becomes to new top's right subtree
    newRoot.left = node;
    node.right = preLeftNode;

    return newRoot;
  }
}

const avl_tree = new AvlTree<number>();
const num_list = [10, 7, 5, 20, 9, 3];
num_list.forEach((num) => avl_tree.insert(num));
console.log(avl_tree.levelOrder());
