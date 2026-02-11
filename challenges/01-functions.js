// ? Nota: Se hace uso de un condicional ternario a fin de simplificar el código y tenerlo inline

const regularSumNumbers = function (number) {
  return number % 2 === 0 ? "even" : "odd";
};

const arrowSumNumbers = (number) => (number % 2 === 0 ? "even" : "odd");
