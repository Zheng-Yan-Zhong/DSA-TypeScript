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
}

const avl_tree = new AvlTree<number>();
const num_list = [10, 7, 5, 20, 9, 3];
num_list.forEach((num) => avl_tree.insert(num));
console.log(avl_tree.levelOrder());
