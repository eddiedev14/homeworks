import type IBook from "../interfaces/book.interface";

export class Stack {
  public items: IBook[];

  constructor() {
    this.items = [];
  }

  push(value: IBook) {
    this.items.push(value);
  }

  // Se obtiene el último elemento del array y se elimina
  pop() {
    return this.items.length > 0 ? this.items.pop() : null;
  }
}
