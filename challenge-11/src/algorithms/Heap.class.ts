import type { IProduct } from "../interfaces/product.interface";

export default class MaxHeap {
  private heap: IProduct[];

  constructor(initial: IProduct[] = []) {
    this.heap = [];

    if (initial.length > 0) {
      this.heap = [...initial];
      this.heapify();
    }
  }

  push(product: IProduct) {
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
        this.heap[right].popularity > this.heap[left].popularity
          ? right
          : left;

      if (this.heap[maxChild].popularity > this.heap[current].popularity) {
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

      if (this.heap[current].popularity > this.heap[parent].popularity) {
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
