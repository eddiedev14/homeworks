// ? Nota: Se hace uso de un condicional ternario a fin de simplificar el código y tenerlo inline

/*
    Regular functions: El this es dinámico y se asigna en tiempo de ejecución, hace referencia al objeto que ejecuta la función
    Arrow functions: El this no es dinámico, hace referencia al ámbito donde fue creada la función
*/

const regularSumNumbers = function (number) {
  return number % 2 === 0 ? "even" : "odd";
};

const arrowSumNumbers = (number) => (number % 2 === 0 ? "even" : "odd");

console.log(regularSumNumbers(0));
console.log(regularSumNumbers(5));
