import { useState } from "react";
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

  const [currentPatient, setCurrentPatient] = useState(
    patientsList.peek(1109666938),
  );

  //? Doctors
  const [doctorsList, setDoctorsList] = useState(() => {
    const list = new DoctorCircularLinkedList();
    doctors.forEach((doctor) => {
      list.append(doctor);
    });
    return list;
  });

  const [currentDoctor, setCurrentDoctor] = useState(
    doctorsList.peek(1102321321),
  );

  //? History
  const [historyList, setHistoryList] = useState(new HistoryDoubleLinkedList());
  const [currentPatientHistory, setPatientHistory] = useState<Node | null>(
    null,
  );

  //* Effects

  //* Handlers
  const handleAttendPatient = () => {
    // ? Debe de continuar con el siguiente paciente y añadirlo al Historial
    if (!currentPatient) return;
    setCurrentPatient(currentPatient.next);

    // Crear el registro para el historial
    const historyId: number = Date.now();

    const historyRecord: IHistoryRecord = {
      id: historyId,
      patient: currentPatient.value,
      doctor: currentDoctor.value,
    };
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
        <History currentHistoryRecord={currentPatientHistory?.value} />
      </main>
    </>
  );
};
