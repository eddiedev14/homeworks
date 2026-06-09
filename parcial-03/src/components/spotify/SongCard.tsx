import type { ISong } from "../../interfaces/ISong.interface";

interface Props {
    song: ISong;
    onSelect?: (song: ISong) => void;
}

export default function SongCard({ song, onSelect }: Props) {
    return (
        <article className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white p-4 shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                <img
                    src={song.coverUrl}
                    alt={song.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-1 flex-col overflow-hidden">
                <h3 className="truncate text-lg font-bold text-gray-900">
                    {song.title}
                </h3>

                <p className="truncate text-sm text-zinc-400">
                    {song.artist}
                </p>

                <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                        {song.genre}
                    </span>

                    <span className="text-xs text-green-600">
                        {song.plays} reproducciones
                    </span>
                </div>
            </div>

            <button type="button"
                onClick={() => onSelect?.(song)}
                className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-400 cursor-pointer"
            >
                Seleccionar
            </button>
        </article>
    );
}