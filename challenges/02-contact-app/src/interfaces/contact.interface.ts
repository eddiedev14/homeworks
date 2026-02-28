export default interface IContact {
  id: number; // Definido por los milisegundos con Date.now()
  name: string;
  phone: string; // Se deja el telefono como string para poder validarlo en el form con una expresión regular
}
