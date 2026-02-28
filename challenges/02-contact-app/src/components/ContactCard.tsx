import avatar from "../images/avatar.png";

interface Props {
  name: string;
  phone: string;
}

export const ContactCard = ({ name, phone }: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105">
      <img className="size-12" src={avatar} alt="User Avatar" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="text-md font-semibold">{name}</h3>
          <span className="text-sm font-light text-slate-800">{phone}</span>
        </div>
        <button className="cursor-pointer bg-red-500 w-10 h-10 flex justify-center items-center rounded-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h3M7 7H5m2 0 .463 12.038a1 1 0 0 0 1 .962h7.075a1 1 0 0 0 .999-.962L17 7m0 0h2m-2 0h-3m-4 0V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-4 0h4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
