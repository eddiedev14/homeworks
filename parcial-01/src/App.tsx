import { useEffect, useState } from "react";
import { Header } from "./components/Header";

import { Patient } from "./components/Patient";
import { patients } from "./data/patients.mock.data";
import SingleLinkedList from "./algorithms/PatientsLinkedList";

import { Doctor } from "./components/Doctor";
import { doctors } from "./data/doctors.mock.data";
import DoctorCircularLinkedList from "./algorithms/DoctorCircularLinkedList";

import { History } from "./components/History";
import type IHistoryRecord from "./interfaces/IHistoryRecord";
import HistoryDoubleLinkedList, {
  Node,
} from "./algorithms/HistoryDoubleLinkedList";

import { AdministrativeCommittee } from "./components/AdministrativeCommittee";
import { Footer } from "./components/Footer";

export const App = () => {
  //* States
  //? Patients
  const [patientsList, setPatientsList] = useState(() => {
    const list = new SingleLinkedList();
    patients.forEach((patient) => {
      list.append(patient);
    });
    return list;
  });
  const [currentPatient, setCurrentPatient] = useState(patientsList.head);

  //? Doctors
  const [doctorsList, setDoctorsList] = useState(() => {
    const list = new DoctorCircularLinkedList();
    doctors.forEach((doctor) => {
      list.append(doctor);
    });
    return list;
  });
  const [currentDoctor, setCurrentDoctor] = useState(doctorsList.head);

  //? History
  const [historyList, setHistoryList] = useState(new HistoryDoubleLinkedList());
  const [currentHistoryRecord, setCurrentHistoryRecord] = useState<Node | null>(
    null,
  );

  //* Effects
  //? Efecto para pasar de doctor cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!currentDoctor) return;
      setCurrentDoctor(currentDoctor?.next);
    }, 10000);

    // Funcion de limpieza por si se destruye el componente
    return () => {
      clearInterval(interval);
    };
  }, [currentDoctor]);

  //* Handlers
  //? Patients
  const handleAttendPatient = () => {
    // ? Debe de continuar con el siguiente paciente y añadirlo al Historial
    if (!currentPatient || !currentDoctor) return;
    // Crear el registro para el historial y añadirlo a la lista
    const historyId: number = Date.now();

    const historyRecord: IHistoryRecord = {
      id: historyId,
      patient: currentPatient.value,
      doctor: currentDoctor.value,
    };

    historyList.append(historyRecord);

    // Se marca como actual si antes no había nada
    if (!currentHistoryRecord)
      setCurrentHistoryRecord(historyList.peek(historyId));

    // Se elimina el registro de la linked list del paciente acutal y se pasa al siguiente
    const nextPatient = currentPatient.next;
    handleRemovePatient(currentPatient.id);
    setCurrentPatient(nextPatient);
  };

  // Metodo para eliminar un paciente de la linked list
  const handleRemovePatient = (id: number) => {
    setPatientsList((prev) => {
      //? En este caso se tiene que crear un nueva referencia para que React detecte el cambio y haga un re-render
      const newList = new SingleLinkedList();

      // Se copia o clona la lista original, a partir del método toArray() que convierte la lista a array (es como si se hiciera un deep copy)
      prev.toArray().forEach((patient) => {
        newList.append(patient);
      });

      // Ahora se elimina de esa copia realizada el id deseado
      newList.remove(id);
      return newList;
    });
  };

  //? History
  const handlePrevHistoryRecord = () => {
    if (!currentHistoryRecord) return;
    setCurrentHistoryRecord(currentHistoryRecord?.prev);
  };

  const handleNextHistoryRecord = () => {
    if (!currentHistoryRecord) return;
    setCurrentHistoryRecord(currentHistoryRecord?.next);
  };

  return (
    <>
      <Header
        title="Parcial 01 - EDYA2"
        paragraph="Sistema de gestión de turnos para pacientes"
      />

      <main className="py-4 px-8 grid grid-cols-3 gap-8">
        <Patient
          currentPatient={currentPatient?.value}
          onAttendPatient={handleAttendPatient}
        />
        <Doctor currentDoctor={currentDoctor?.value} />
        <History
          currentHistoryRecord={currentHistoryRecord?.value}
          onPrevRecord={handlePrevHistoryRecord}
          onNextRecord={handleNextHistoryRecord}
          prevDisabled={!currentHistoryRecord?.prev}
          nextDisabled={!currentHistoryRecord?.next}
        />
      </main>

      <hr />
      <section className="mt-4 max-w-md mx-auto">
        <AdministrativeCommittee />
      </section>

      <Footer />
    </>
  );
};
