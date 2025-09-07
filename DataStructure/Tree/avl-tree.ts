import BST from "./binary-search-tree.ts";
import Node from "./Node.ts";
class AvlTree<T> extends BST<T> {
  constructor() {
    super();
  }

  insert(value: T) {
    const _this = this;
    this.root = _insert(this.root, value);
    function _insert(node: Node<T> | null, value: T): Node<T> {
      if (!node) return new Node(value);

      if (value < node.data) {
        node.left = _insert(node.left, value);
      } else if (value > node.data) {
        node.right = _insert(node.right, value);
      }

      // perform AVL Tree

      const balanceFactor = _this.getBalanceFactor(node);

      //LL
      if (node.left && balanceFactor > 1 && value < node.left.data) {
        return _this.rotateRight(node);
      }
      //LR
      if (node.left && balanceFactor > 1 && value > node.left.data) {
        node.left = _this.rotateLeft(node.left);
        return _this.rotateRight(node);
      }

      //RR
      if (node.right && balanceFactor < 1 && value > node.right.data) {
        return _this.rotateLeft(node);
      }
      //RL
      if (node.right && balanceFactor < 1 && value < node.right.data) {
        node.right = _this.rotateRight(node.right);
        return _this.rotateLeft(node);
      }

      return node;
    }
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

    const newRoot = node.left; // move to the top
    const preRightNode = newRoot.right; // store pre right subtree
    // rotating, pre top becomes to new top's right subtree
    newRoot.right = node;
    node.left = preRightNode;
    return newRoot;
  }

  rotateLeft(node: Node<T>): Node<T> {
    if (!node.right) return node; // The node doesn't have a right subtree, therefore, can't do rotation

    const newRoot = node.right; // move to the top
    const preLeftNode = newRoot.left; // store pre right subtree

    // rotating, pre top becomes to new top's right subtree
    newRoot.left = node;
    node.right = preLeftNode;

    return newRoot;
  }
}

const avl_tree = new AvlTree<number>();
const num_list = [10, 20, 30];
num_list.forEach((num) => avl_tree.insert(num));
console.log(avl_tree.levelOrder());
