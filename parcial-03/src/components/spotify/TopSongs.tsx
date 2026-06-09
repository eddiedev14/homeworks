import { useState } from "react";
import SongCard from "./SongCard";
import { useSong } from "../../hooks/spotify/useSong";

export const TopSongs = () => {
    const { getTopSongs, setSelectedSong } = useSong();
    const [topSize, setTopSize] = useState(5);
    const topSongs = getTopSongs(topSize);

    return (
        <section className="flex flex-col gap-6 rounded-3xl border border-white/10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold">
                        Top Canciones
                    </h2>

                    <span className="text-sm text-zinc-600">
                        Ranking por reproducciones
                    </span>
                </div>

                {/* Select */}
                <div className="flex items-center gap-3">

                    <label className="text-sm font-medium text-zinc-600">
                        Mostrar:
                    </label>

                    <select
                        value={topSize}
                        onChange={(e) => setTopSize(Number(e.target.value))}
                        className="rounded-xl border px-4 py-2 text-sm outline-none"
                    >
                        <option value={3}>Top 3</option>
                        <option value={5}>Top 5</option>
                        <option value={10}>Top 10</option>
                    </select>
                </div>
            </div>

            {/* Songs */}
            <div className="flex flex-col gap-4">

                {topSongs.map((song, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-white shadow-lg">
                            #{index + 1}
                        </div>

                        <div className="flex-1">
                            <SongCard
                                song={song}
                                onSelect={setSelectedSong}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};