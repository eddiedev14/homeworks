import type { ISong } from "../interfaces/ISong.interface";

export default class MaxHeap {
  private heap: ISong[];

  constructor(initial: ISong[] = []) {
    this.heap = [];

    if (initial.length > 0) {
      this.heap = [...initial];
      this.heapify();
    }
  }

  push(product: ISong) {
    this.heap.push(product);
    this.percolateUp();
  }

  pop() {
    if (this.heap.length === 0) return undefined;

    const n = this.heap.length;
    this.swap(0, n - 1);

    const max = this.heap.pop();
    this.percolateDown(0);
    return max;
  }

  //* Función para convertir el array en un heap
  heapify() {
    // Empieza desde el último nodo padre
    const start = Math.floor((this.heap.length - 2) / 2);

    for (let i = start; i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  percolateDown(index: number) {
    let current = index;

    while (2 * current + 1 < this.heap.length) {
      const left = 2 * current + 1;
      const right = 2 * current + 2;

      const maxChild =
        right < this.heap.length &&
        this.heap[right].plays > this.heap[left].plays
          ? right
          : left;

      if (this.heap[maxChild].plays > this.heap[current].plays) {
        this.swap(current, maxChild);
        current = maxChild;
      } else {
        break;
      }
    }
  }

  percolateUp() {
    let current = this.heap.length - 1;

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);

      if (this.heap[current].plays > this.heap[parent].plays) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  }

  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
