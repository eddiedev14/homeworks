import { createContext, type ReactNode } from "react";
import { useSongState } from "../hooks/spotify/useSongState";

export type ISongContext = ReturnType<typeof useSongState>;

interface IProvider {
  children: ReactNode;
}

export const SongContext = createContext<ISongContext | null>(null);

export const SongContextProvider = ({ children }: IProvider) => {
  const contextData = useSongState();

  return (
    <SongContext.Provider value={contextData}>{children}</SongContext.Provider>
  );
};
