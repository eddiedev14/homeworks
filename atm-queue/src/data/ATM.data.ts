import type IATMRecord from "../interfaces/IATMRecord.interface";
import { randomArrivalDate } from "../utils/functions";

export const atmRecordsMock: IATMRecord[] = [
	{
		arrivalDate: randomArrivalDate(),
		person: "Carlos Ramírez",
		description: "Retiro de efectivo",
		amount: 200000,
	},
	{
		arrivalDate: randomArrivalDate(),
		person: "Laura Gómez",
		description: "Depósito en cuenta",
		amount: 350000,
	},
	{
		arrivalDate: randomArrivalDate(),
		person: "Andrés Martínez",
		description: "Pago de servicio público",
		amount: 120000,
	},
	{
		arrivalDate: randomArrivalDate(),
		person: "Diana López",
		description: "Transferencia a otra cuenta",
		amount: 50000,
	},
	{
		arrivalDate: randomArrivalDate(),
		person: "Juan Pérez",
		description: "Retiro de efectivo",
		amount: 150000,
	},
	{
		arrivalDate: randomArrivalDate(),
		person: "Mariana Torres",
		description: "Depósito en cuenta",
		amount: 400000,
	},
];
