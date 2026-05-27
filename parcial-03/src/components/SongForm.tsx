import { Button } from "./shared/Button"
import { useSongForm } from "../hooks/useSongForm"

export const SongForm = () => {
  const { title, artist, genre, coverUrl, plays, handleTitleChange, handleArtistChange, handleGenreChange, handleCoverUrlChange, handlePlaysChange, handleSubmit } = useSongForm();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Agregar canción</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Título" value={title} onChange={handleTitleChange} />
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Artista(s) (separar por comas)" value={artist} onChange={handleArtistChange} />
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Género" value={genre} onChange={handleGenreChange} />
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="URL de la portada" value={coverUrl} onChange={handleCoverUrlChange} />
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Número de Reproducciones" value={plays} onChange={handlePlaysChange} />
        <Button type="submit" text="Agregar canción" variant="primary" size="lg" />
      </form>
    </>
  );
};
