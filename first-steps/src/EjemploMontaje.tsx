import { useEffect } from "react";

export const EjemploMontaje = () => {
  //* Effects
  useEffect(() => {
    console.log("El componente se montó");
  }, []);

  return <h2>Ejemplo Montaje</h2>;
};
