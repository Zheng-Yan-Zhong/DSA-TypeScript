import type StackActions from "./StackActions.ts";

class Stack<T> implements StackActions<T> {
  private items: T[] = [];

  isEmpty(): boolean {
    return this.items.length === 0;
  }
  size(): number {
    return this.items.length;
  }
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    if (this.items.length === 0) return undefined;
    return this.items.pop();
  }
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }
}

const stack1 = new Stack<string>();
stack1.push("1");
