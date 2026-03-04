import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type IStudent from "../interfaces/IStudent";

interface Props {
    onAddStudent: (newStudent: IStudent) => void;
}

export const StudentForm = ({ onAddStudent }: Props) => {
    //* States
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    //* Handlers
    const handleCodeChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setCode(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const student: IStudent = {
            code: Number(code),
            name,
            age: Number(age)
        }
        onAddStudent(student);

        // Reset the states (form)
        setCode("")
        setName("");
        setAge("")
    };

    return (
        <section>
            <h2 className="text-3xl font-bold">Nuevo Estudiate</h2>
            <p className="text-sm font-light text-slate-800">Agrega un nuevo estudiante a tu lista.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">
                        Codigo:
                    </label>
                    <input
                        type="number"
                        id="code"
                        value={code}
                        onChange={handleCodeChange}
                        className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">
                        Edad:
                    </label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={handleAgeChange}
                        className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-48 py-2 bg-black text-white font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
                >
                    Guardar
                </button>
            </form>
        </section>
    );
};