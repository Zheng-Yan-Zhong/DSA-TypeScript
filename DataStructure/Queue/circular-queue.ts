class CircularQueue<T> {
  private arr: (T | null)[] = [];
  private size: number;
  private front: number;
  private rear: number;
  constructor(size: number) {
    if (size <= 0) throw new Error("Capacity must be a positive number");

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
