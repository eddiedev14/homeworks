import type ISong from "../interfaces/song.interface";

class Node {
	//* Properties
	public id: number; // Se agrega un id para facilitar la busqueda pues el value es un objeto
	public value: ISong;
	public next: Node | null;

	constructor(song: ISong) {
		this.id = song.id;
		this.value = song;
		this.next = null;
	}
}

export default class PlayerLinkedList {
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
	append(value: ISong) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			// Si ya existe la cabeza, es el siguiente de la cola actual (se actualiza apuntador)
			if (this.tail) this.tail.next = newNode;
		}

		// Se actualiza la cola con el nuevo nodo
		this.tail = newNode;
		this.length++;
	}

	// La función de búsqueda se realizará por id
	peek(id: number | undefined) {
		if (id === undefined) return null;

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

	next(id: number | undefined) {
		if (id === undefined) return null;

		let current = this.head;

		// Se recorre toda la lista
		while (current) {
			// Si se encontró la canción actual se retorna la siguiente para avanzar
			if (current.id === id) return current.next;

			// Continuar con el siguiente si no lo encontro
			current = current.next;
		}

		//Si no hay siguiente canción
		return null;
	}
}
