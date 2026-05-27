import SongCard from "./SongCard";
import { useSong } from "../hooks/useSong";

export const GraphPanel = () => {
    const { selectedSong, setSelectedSong, getRecommendations } = useSong();
    const recommendations = selectedSong ? getRecommendations(selectedSong) : [];

    return (
        <section className="flex flex-col gap-8 rounded-3xl border p-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold">Recomendaciones</h2>
                <p className="text-sm text-zinc-600">Relaciones automáticas por artista o género con tu canción seleccionada</p>
            </div>

            {!selectedSong && (
                <div className="flex h-100 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
                    <p className="text-zinc-400">Selecciona una canción para visualizar sus conexiones</p>
                </div>
            )}

            {selectedSong && (
                <div className="flex flex-col gap-8">
                    <h3 className="text-xl font-bold text-green-700">Canción seleccionada: "{selectedSong.title}"</h3>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Conexiones del Grafo</h3>
                        {recommendations.length > 0 ? (
                            <div className="flex flex-col gap-4">

                                {recommendations.map((song, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <SongCard
                                            song={song}
                                            onSelect={setSelectedSong}
                                        />
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <div className="flex items-center justify-center rounded-2xl border border-dashed border-zinc-700 p-6">
                                <p className="text-zinc-400">
                                    Esta canción no tiene conexiones
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};