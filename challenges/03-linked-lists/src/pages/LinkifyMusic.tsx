import { useRef, useState } from 'react';
import { songs } from '../data/songs.mock.data';

export const LinkifyMusic = () => {
  //* States
  const [currentSong, setCurrentSong] = useState(songs[0]);
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

  return (
    <main className="flex justify-center items-center mt-12 pb-8">
      <div className="max-w-md flex flex-col gap-3">
        <img src={currentSong.thumbnail} alt="Song Cover" className="rounded-2xl size-96" />
        <div>
          <h3 className="text-3xl font-bold">{currentSong.title}</h3>
          <p className="text-sm text-slate-800">{currentSong.artists}</p>
        </div>
        <div className="flex justify-center gap-2 *:size-12 *:shadow *:rounded-full *:cursor-pointer *:text-3xl">
          <button className="bg-slate-100 text-slate-700 border border-slate-800">
            <i className="ri-arrow-left-circle-fill"></i>
          </button>
          <button onClick={handleToggleSong} className="bg-emerald-500 text-white">
            <i className={!playing ? 'ri-play-circle-fill' : 'ri-pause-circle-fill'}></i>
          </button>
          <button className="bg-slate-100 text-slate-700 border border-slate-800">
            <i className="ri-arrow-right-circle-fill"></i>
          </button>

          {/* 
            Aquí se conecta el elemento <audio> con la referencia.
            ref={audioRef} hace que audioRef.current apunte a este elemento.
          */}
          <audio src={currentSong.src} ref={audioRef} className="hidden"></audio>
        </div>
      </div>
    </main>
  );
};
