const myArray: string[] = [
  "First App",
  "Second App",
  "Third App",
  "Fourth App",
];

export const Arrays = () => {
  return (
    <ol>
      {myArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
