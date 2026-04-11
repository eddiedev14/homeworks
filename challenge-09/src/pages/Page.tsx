import { Header } from "../components/shared/Header";

interface Props {
  title: string;
  paragraph: string;
}

export const Page = (props: Props) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};
