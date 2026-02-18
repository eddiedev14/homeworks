import { useState } from "react";

interface Props {
  initial: number;
}

export const Contador = ({ initial = 0 }: Props) => {
  //* States
  const [counter, setCounter] = useState(initial);

  //* Handlers
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p>Contador: {counter}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};
