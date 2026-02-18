import { useState } from "react";

export const Arrays = () => {
  const [array, setArray] = useState<number[]>([]);

  const handleAdd = () => {
    const item = Date.now();
    setArray((prev) => [...prev, item]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add new Item</button>
      <ol>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};
