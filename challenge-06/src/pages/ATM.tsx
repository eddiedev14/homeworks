import { ATMList } from "../components/atm/ATMList";
import { ATMForm } from "../components/atm/ATMForm";
import { useATM } from "../hooks/atm/useATM";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

export const ATM = () => {
  const { ATMQueue, handleAddRecord, handleWithdrawal } = useATM();

  return (
    <>
      <Header
        title="ATM Queue"
        paragraph="Gestiona tu atención de ATM desde un solo lugar!"
      />

      <main className="grid grid-cols-2 columns-2xl py-12 px-16 gap-8">
        <ATMForm
          onAddATMRecord={handleAddRecord}
          onWithdrawal={handleWithdrawal}
        />
        <ATMList records={ATMQueue.items} />
      </main>

      <Footer project="ATM Queue" />
    </>
  );
};
