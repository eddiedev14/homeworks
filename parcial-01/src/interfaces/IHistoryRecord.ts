import type IDoctor from "./IDoctor";
import type IPatient from "./IPatient";

export default interface IHistoryRecord {
  id: number;
  patient: IPatient;
  doctor: IDoctor;
  date: Date;
}
