import type IStudent from "../interfaces/IStudent"

interface Props {
    students: IStudent[]
}

export const StudentsList = ({ students }: Props) => {
    return (
        <section className="flex flex-wrap justify-center items-center gap-4">
            {students.map(student => (
                <div key={student.code} className="px-8 py-4 shadow border border-gray-200 rounded-md">
                    <h3 className="text-xl font-bold">{student.name}</h3>
                    <p className="text-sm text-slate-700">Edad: {student.age}</p>
                    <p className="text-sm text-slate-700">Código: {student.code}</p>
                </div>
            ))}
        </section>
    )
}
