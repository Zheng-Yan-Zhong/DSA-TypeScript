export default interface StackActions<T> {
  push(item: T): void;
  pop(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  peak(): T | undefined;
}
