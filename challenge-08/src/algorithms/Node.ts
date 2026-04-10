export default class Node {
  public valor: number;
  public izquierda: Node | null;
  public derecha: Node | null;

  constructor(valor: number) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}
