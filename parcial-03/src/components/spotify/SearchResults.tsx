import SongCard from "./SongCard";
import { useSong } from "../../hooks/spotify/useSong";

export const SearchResults = () => {
    const { searchedSong, suggestedPrefixSongs, isSearched, setSelectedSong } = useSong();

    return (
        <section className="flex flex-col gap-8">
            {isSearched && (
                searchedSong ? (
                    <div className="flex flex-col gap-4">

                        <h2 className="text-2xl font-bold">
                            Coincidencia exacta
                        </h2>

                        <SongCard
                            song={searchedSong}
                            onSelect={setSelectedSong}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">

                        <h2 className="text-2xl font-bold">
                            Coincidencia exacta
                        </h2>

                        <div className="flex items-center justify-center rounded-2xl border border-dashed border-red-500/40 bg-red-500/10 p-6">
                            <p className="text-md font-medium text-red-300">
                                No se encontró una canción con ese nombre
                            </p>
                        </div>
                    </div>
                )
            )}

            {isSearched && suggestedPrefixSongs.length > 0 && (
                <div className="flex flex-col gap-4">

                    <h2 className="text-2xl font-bold">
                        Otros resultados (Prefijo)
                    </h2>

                    <div className="flex flex-col gap-4">
                        {suggestedPrefixSongs.map((song, index) => (
                            <SongCard
                                key={index}
                                song={song}
                                onSelect={setSelectedSong}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
