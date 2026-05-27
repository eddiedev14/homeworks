import { useState } from "react";
import { useSong } from "./useSong";
import type { ISong } from "../interfaces/ISong.interface";
import { toast } from "react-toastify";

export const useSongForm = () => {
  //* States
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [plays, setPlays] = useState("");

  //* Context
  const { createSong } = useSong();

  //* Handlers
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handleCoverUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverUrl(e.target.value);
  };

  const handlePlaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlays(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const song: ISong = {
      title,
      artist,
      genre,
      coverUrl,
      plays: Number(plays),
    };

    const error = await createSong(song);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Canción agregada correctamente !");
  };

  return {
    title,
    artist,
    genre,
    coverUrl,
    plays,
    handleTitleChange,
    handleArtistChange,
    handleGenreChange,
    handleCoverUrlChange,
    handlePlaysChange,
    handleSubmit,
  };
};
