interface Props {
  message: string;
  value: number;
}

export const PrintMessage = ({ message, value }: Props) => {
  return (
    <h3>
      {message} - {value}
    </h3>
  );
};
