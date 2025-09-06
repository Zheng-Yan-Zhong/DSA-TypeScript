import BinaryTree from "./binary-tree";
import Node from "./Node";

class BinarySearchTree<T> extends BinaryTree<T> {
  constructor() {
    super();
  }

  insertByLoop(value: T) {
    const node = new Node<T>(value);
    if (this.root == null) {
      this.root = node;
      return;
    }

    let currentNode = this.root;
    while (true) {
      // boundary
      if (currentNode.data == value) break;

      // current node's value is less than value
      if (currentNode.data < value) {
        if (currentNode.right != null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = node;
          break;
        }
      } else {
        // current node's value is greater than value
        if (currentNode.left != null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          break;
        }
      }
    }
  }

  insertByRecursion(value: T) {
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }

    _insert(this.root);

    function _insert(node: Node<T>) {
      //boundary
      if (node.data == value) return;
      // current node's value is less than value
      if (node.data < value) {
        if (node.right != null) {
          _insert(node.right);
        } else {
          node.right = new Node(value);
          return;
        }
      } else {
        // current node's value is greater than value
        if (node.left != null) {
          _insert(node.left);
        } else {
          node.left = new Node(value);
          return;
        }
      }
    }
  }
}

// const binary_search_tree = new BinarySearchTree<number>();
// binary_search_tree.insertByRecursion(10);
// binary_search_tree.insertByRecursion(7);
// binary_search_tree.insertByRecursion(5);

// console.log(binary_search_tree.levelOrder()); //[ 10, 7, 5 ]
export default BinarySearchTree;
