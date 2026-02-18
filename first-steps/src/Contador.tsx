import { useState } from "react";

interface Props {
  initial: number;
}

export const Contador = ({ initial = 0 }: Props) => {
  //* States
  const [counter, setCounter] = useState<number>(initial);

  //* Handlers
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(initial);
  };

  return (
    <>
      <p>Contador: {counter}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};
