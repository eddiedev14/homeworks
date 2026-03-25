import { Card } from "../components/shared/Card";
import { Header } from "../components/shared/Header";
import { Navbar } from "../components/shared/NavBar";
import { useAuthContext } from "../hooks/shared/useAuthContext";

export const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás acceder y probar cada uno de los challenges"
        showImage={true}
      />

      <div className="flex flex-wrap justify-center my-8 gap-8">
        <Card
          title="Library (Stack)"
          description="Practica y visualiza cómo funcionan las pilas (stacks) en una librería"
          emoji="📚"
          path="/library"
        />
        <Card
          title="ATM (Stack)"
          description="Practica y visualiza cómo funcionan las colas (queue) en un ATM"
          emoji="🏧"
          path="/atm"
        />
      </div>
    </>
  );
};
