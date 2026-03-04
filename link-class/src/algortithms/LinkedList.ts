import type IStudent from "../interfaces/IStudent";

class Node {
	//* Properties
	public id: number; // Se agrega un id para facilitar la busqueda pues el value es un objeto
	public value: IStudent;
	public next: Node | null;

	constructor(student: IStudent) {
		this.id = student.code;
		this.value = student;
		this.next = null;
	}
}

export default class LinkedList {
	//* Properties
	public head: null | Node;
	public tail: null | Node;
	public length: number;

	constructor(existingList?: LinkedList) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//* Methods
	append(value: IStudent) {
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

	remove(id: number) {
		if (id === undefined) return null;

		if (!this.head)
			//Si no hay cabeza no se puede eliminar nada (no hay elementos)
			return null;
		if (this.head.value.code === id) {
			// Si el valor que se quiere eliminar es la cabeza. La cabeza será el siguiente
			this.head = this.head.next;

			// Si después de mover la cabeza, ahora no existe cabeza, tampoco puede existir cola
			if (!this.head) {
				this.tail = null;
			}

			this.length--;
			return;
		}

		// Si no se empieza a recorrer uno por uno
		let current = this.head;
		while (current.next && current.next.value.code !== id) {
			current = current.next;
		}

		// Si el siguiente es el valor que se desea obtener para remover
		if (current.next) {
			current.next = current.next.next; // Se establece el next, con el siguiente del valor que se va a eliminar.
			if (!current.next) this.tail = current; // Si no hay siguiente, entonces es la cola
			this.length--;
		}
	}

	toArray() {
		let current = this.head;
		const array: IStudent[] = [];
		while (current) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
}
