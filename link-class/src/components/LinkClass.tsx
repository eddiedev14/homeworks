import { useState } from "react"
import type IStudent from "../interfaces/IStudent"
import { Header } from "./Header"
import LinkedList from "../algortithms/LinkedList"
import { StudentsList } from "./StudentsList"
import { StudentForm } from "./StudentForm"

export const LinkClass = () => {
    //* States
    const [studentsList, setStudentsList] = useState(new LinkedList());

    //* Handlers
    const handleAddStudent = (newStudent: IStudent) => {
        setStudentsList((prev) => {
            const newList = new LinkedList()

            // Hacer una copia del arreglo previo
            prev.toArray().forEach(student => {
                newList.append(student)
            })

            // Añadir el nuevo estudiante
            newList.append(newStudent)
            return newList;
        })
    }

    return (
        <>
            <Header title="LinkClass" paragraph="Practica 01 - Parcial Corte 01" />
            <main className="grid grid-cols-2 px-12 py-6">
                <StudentForm onAddStudent={handleAddStudent} />
                <StudentsList students={studentsList.toArray()} />
            </main>
        </>
    )
}
