import Node from "./Node";
import type TreeActions from "./TreeActions";
class BinaryTree<T> implements TreeActions<T> {
  public root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  // insert(value: T): T {
  //   const node = new Node(value);
  //   if (this.root === null) {
  //     this.root = node;
  //     return node.data;
  //   }
  // }

  inOrder(): T[] {
    const output: T[] = [];
    _inOrder(this.root); //recursion

    function _inOrder(node: Node<T> | null) {
      if (!node) return; // boundary
      console.log(node.data);

      if (node.left) _inOrder(node.left);
      output.push(node.data);
      if (node.right) _inOrder(node.right);
    }
    console.log(output);
    return output;
  }

  preOrder(): T[] {
    const output: T[] = [];
    _inOrder(this.root); //recursion

    function _inOrder(node: Node<T> | null) {
      if (!node) return; // boundary
      console.log(node.data);

      output.push(node.data);
      if (node.left) _inOrder(node.left);
      if (node.right) _inOrder(node.right);
    }
    console.log(output);

    return output;
  }
  postOrder(): T[] {
    const output: T[] = [];
    _inOrder(this.root); //recursion

    function _inOrder(node: Node<T> | null) {
      if (!node) return; // boundary
      console.log(node.data);

      if (node.left) _inOrder(node.left);
      if (node.right) _inOrder(node.right);
      output.push(node.data);
    }
    console.log(output);

    return output;
  }
  levelOrder(): T[] {
    return [];
  }
}

const binary_tree = new BinaryTree();

binary_tree.root = new Node(5);
binary_tree.root.left = new Node(3);
binary_tree.root.right = new Node(12);
binary_tree.root.left.left = new Node(9);
binary_tree.root.left.right = new Node(1);
binary_tree.root.right.right = new Node(30);

binary_tree.preOrder(); //[ 5, 3, 9, 1, 12, 30 ]
binary_tree.inOrder(); // [ 9, 3, 1, 5, 12, 30 ]
binary_tree.postOrder(); //[ 9, 1, 3, 30, 12, 5 ]
