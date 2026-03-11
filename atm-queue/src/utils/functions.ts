export function randomArrivalDate() {
  const now = new Date();

  // Obtener un número random de minutos a restar a la hora actual...
  const randomMinutes = Math.floor(Math.random() * 600);

  // Convertir minutos a milisegundos
  const milliseconds = randomMinutes * 60000;

  // Retornar la fecha random
  return new Date(now.getTime() - milliseconds);
}
