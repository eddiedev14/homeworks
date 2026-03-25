import type IATMRecord from "../interfaces/IATMRecord.interface";

export default class Queue {
  public items: IATMRecord[];

  constructor() {
    this.items = [];
  }

  enqueue(value: IATMRecord) {
    this.items.push(value);
  }

  dequeue() {
    // Se obtiene el primer elemento y se elimina
    return this.items.length > 0 ? this.items.shift() : null;
  }
}
