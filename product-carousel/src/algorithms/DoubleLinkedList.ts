import type IProduct from "../interfaces/IProduct";

class Node {
	//* Properties
	public id: number; // Se agrega un id para facilitar la busqueda pues el value es un objeto
	public value: IProduct;
	public next: Node | null;
	public prev: Node | null;

	constructor(page: IProduct) {
		this.id = page.id;
		this.value = page;
		this.next = null;
		this.prev = null;
	}
}

export default class DoubleLinkedList {
	//* Properties
	private head: null | Node;
	private tail: null | Node;
	private length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//* Methods
	append(value: IProduct) {
		const newNode = new Node(value);

		// Si no hay ningun elemento aún
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			// Se apunta a sí mismo
			newNode.next = newNode;
			newNode.prev = newNode;

			this.length++;
			return;
		}

		// Si se añade un elemento nuevo al final actualizar prev y next
		if (this.tail) this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode; //Actualizar cola

		// Hacer circular
		this.tail.next = this.head;
		this.head.prev = this.tail;
	}

	// La función de búsqueda se realizará por id
	peek(id: number) {
		let current = this.head;

		// Se recorre toda la lista
		while (current) {
			if (current.id === id) return current;

			// Continuar con el siguiente si no lo encontro
			current = current.next;
		}

		//Si no lo encontro retorna null
		return null;
	}
}
