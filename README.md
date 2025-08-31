# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Data Structures](#data-structures)
    - [Stack](#stack)
    - [Queue](#queue)
      - [Regular Queue](#regular-queue)
        - [Time Complexity](#time-complexity)
        - [Implement](#implement)
      - [Circular Queue](#circular-queue)
        - [Applications of Circular Queue](#applications-of-circular-queue)
        - [Time Complexity](#time-complexity-1)
        - [Variables](#variables)
        - [Operations](#operations)
        - [Implement](#implement-1)
      - [Priority Queue](#priority-queue)
  - [Algorithms](#algorithms)

## Data Structures

### Stack

### Queue

佇列(Queue)遵循著 Fist In First Out(FIFO) 原則。

#### Regular Queue

##### Time Complexity

- shift - `O(n)`
- pop - `O(1)`

一般來說，程式語言實作佇列(Queue)會設定固定大小，並且若元素取出後，會有閒置的空間。

舉例

```javascript
const arr = [1, 2, 3, 4];
```

取出頭部元素後

```javascript
const arr = [empty, 2, 3, 4];
```

而 JavaScript 實作的 **shift**，則是取出頭部元素後，將所有元素往前移動。也就是說，時間複雜度(time complexity) 會是 `O(n)`，當資料量過多時，會影響效能。

##### Implement

```typescript
import type QueueActions from "./QueueActions.ts";

class Queue<T> implements QueueActions<T> {
  private items: T[] = [];

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  peek(): T | undefined {
    if (this.items.length === 0) return undefined;
    return this.items[0];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items.shift();
  }
}
```

#### Circular Queue

Circular Queue 常被稱作為 **Ring Buffer**，它的出現則是為了解決 [Regular Queue](#normal-queue) 移除元素的時間複雜度從`O(n)` 到 `O(1)`。

```
if REAR + 1 == 5 (overflow!), REAR = (REAR + 1)%5 = 0 (start of queue)
```

##### Applications of Circular Queue

- CPU scheduling
- Memory management
- Traffic Management

##### Time Complexity

- shift - `O(1)`
- pop - `O(1)`

##### Variables

- pointers
  - rear - initial value `-1`
  - front - initial value `-1`
- size
- arr - container

##### Operations

- enqueue(value)
- dequeue
- isFull
- isEmpty

##### Implement

```typescript
class CircularQueue<T> {
  private arr: (T | null)[] = [];
  private size: number;
  private front: number;
  private rear: number;
  constructor(size: number) {
    if (size <= 0) throw new Error("Size must be a positive number.");

    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.arr = new Array(size).fill(null);
  }

  //Adding element
  enqueue(value: T): T | string {
    if (this.isFull()) {
      return "The Queue is full.";
    }
    if (this.front == -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.arr[this.rear] = value;
    return value;
  }

  //Removing element
  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.arr[this.front];
    if (removedValue == undefined) {
      return null;
    }
    // set null
    this.arr[this.front] = null;

    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return removedValue;
  }

  isFull(): boolean {
    return this.front === (this.rear + 1) % this.size;
  }

  isEmpty(): boolean {
    return this.front == -1;
  }
  display(): (T | null)[] {
    return [...this.arr];
  }
}

const circular_queue = new CircularQueue<number>(5);

circular_queue.enqueue(1);
console.log(circular_queue.display()); //[ 1, null, null, null, null ]

circular_queue.enqueue(2);
console.log(circular_queue.display()); //[ 1, 2, null, null, null ]

circular_queue.enqueue(3);
console.log(circular_queue.display()); //[ 1, 2, 3, null, null ]

circular_queue.enqueue(4);
console.log(circular_queue.display()); //[ 1, 2, 3, 4, null ]

circular_queue.enqueue(5);
console.log(circular_queue.display()); //[ 1, 2, 3, 4, 5 ]

circular_queue.dequeue();
console.log(circular_queue.display()); //[ null, 2, 3, 4, 5 ]

circular_queue.enqueue(6);
console.log(circular_queue.display()); //[ 6, 2, 3, 4, 5 ]
```

#### Priority Queue

---

## Algorithms
