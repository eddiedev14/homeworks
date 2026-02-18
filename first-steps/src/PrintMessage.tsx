interface Props {
  message: string;
}

export const PrintMessage = ({ message }: Props) => {
  return <h3>{message}</h3>;
};
