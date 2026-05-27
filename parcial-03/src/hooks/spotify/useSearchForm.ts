import { useState } from "react";
import { useSong } from "./useSong";

export const useSearchForm = () => {
  //* States
  const [title, setTitle] = useState("");

  //* Context
  const { findSong } = useSong();

  //* Handlers
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    findSong(title);
  };

  return {
    title,

    handleTitleChange,
    handleSubmit,
  };
};
