import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useAuthContext } from "../hooks/useAuthContext";

export const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Header
        title={`¡Bienvenido ${user?.username}!`}
        paragraph="Desde esta página podrás acceder y probar cada uno de los challenges"
      />

      <div className="flex flex-wrap justify-center mt-8 gap-8">
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
