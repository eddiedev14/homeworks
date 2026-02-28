import Swal from 'sweetalert2';
import avatar from '../images/avatar.png';
import { toast } from 'react-toastify';

interface Props {
  id: number;
  name: string;
  phone: string;
  onRemoveContact: (id: number) => void;
}

export const ContactCard = ({ id, name, phone, onRemoveContact }: Props) => {
  //* Handlers
  const handleClickRemove = () => {
    // Use sweetalert2 to confirm the action
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#363836',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        onRemoveContact(id);
        toast.success('¡Contacto eliminado correctamente!');
      }
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105">
      <img className="size-12" src={avatar} alt="User Avatar" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-md font-semibold">{name}</h3>
          <span className="text-sm font-light text-slate-800">{phone}</span>
        </div>
        <button
          onClick={handleClickRemove}
          className="cursor-pointer bg-red-500 w-8 h-8 flex justify-center items-center rounded-full text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7h3M7 7H5m2 0 .463 12.038a1 1 0 0 0 1 .962h7.075a1 1 0 0 0 .999-.962L17 7m0 0h2m-2 0h-3m-4 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-4 0h4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
