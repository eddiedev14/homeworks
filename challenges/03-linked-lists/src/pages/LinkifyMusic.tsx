import { useRef, useState } from 'react';
import { Button } from '../components/Button';
import musicPlayer from '../algorithms/LinkedList';
import notFound from '../../public/img/not-found.png';

export const LinkifyMusic = () => {
  //* States
  // Obtener la primera canción
  const [currentSong, setCurrentSong] = useState(musicPlayer.peek(1));
  const [playing, setPlaying] = useState(false);

  //* Refs
  //? Nuevo Hook: useRef, permite guardar una referencia de un elemento HTML o a un valor que persiste entre renders (no genera una nueva referencia)
  //? Además cuando este valor o referencia se modifica no re-renderiza el componente, a diferencia de un state.
  const audioRef = useRef<HTMLAudioElement | null>(null);

  //* Handlers
  const handleToggleSong = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const handleNextSong = () => {
    setPlaying(false);
    setCurrentSong(musicPlayer.next(currentSong?.id));
  };

  const handlePlayerReset = () => {
    setPlaying(false);
    setCurrentSong(musicPlayer.peek(1));
  };

  return (
    <main className="flex justify-center items-center mt-12 pb-8">
      <div className="max-w-md flex flex-col gap-3">
        {currentSong ? (
          <>
            <img
              src={currentSong?.value.thumbnail}
              alt="Song Cover"
              className="rounded-2xl size-96"
            />

            <div>
              <h3 className="text-3xl font-bold">{currentSong?.value.title}</h3>
              <p className="text-sm text-slate-800">{currentSong?.value.artists}</p>
            </div>

            <div className="flex justify-center gap-2 *:size-12 *:shadow *:rounded-full *:cursor-pointer *:text-3xl">
              <button onClick={handleToggleSong} className="bg-emerald-500 text-white">
                <i className={!playing ? 'ri-play-circle-fill' : 'ri-pause-circle-fill'}></i>
              </button>

              <button
                onClick={handleNextSong}
                className="bg-slate-100 text-slate-700 border border-slate-800"
              >
                <i className="ri-arrow-right-circle-fill"></i>
              </button>
            </div>

            <audio src={currentSong?.value.src} ref={audioRef} className="hidden"></audio>
          </>
        ) : (
          <>
            <img src={notFound} alt="No more songs" className="size-64 mx-auto" />
            <h3 className="text-light text-slate-800">
              ¡No hay más canciones en la lista de reproducción!
            </h3>
            <Button text="Resetear lista de reproducción" onClick={handlePlayerReset} />
          </>
        )}
      </div>
    </main>
  );
};
