import { useEffect, useState } from "react";
import type { ISong } from "../../interfaces/ISong.interface";
import { useCollection } from "../../firebase/useCollection";
import Trie from "../../algorithms/Trie.class";
import MaxHeap from "../../algorithms/Heap.class";
import Graph from "../../algorithms/Graph.class";

export const useSongState = () => {
  //* Collection Hook
  const {
    results: songs,
    isPending: loading,
    error,
    suscribe,
    add,
  } = useCollection<ISong>("songs");

  //* States
  const [trie, setTrie] = useState(new Trie());
  const [graph, setGraph] = useState(new Graph());
  const [isSearched, setIsSearched] = useState(false);
  const [searchedSong, setSearchedSong] = useState<ISong | null>(null);
  const [suggestedPrefixSongs, setSuggestedPrefixSongs] = useState<ISong[]>([]);
  const [selectedSong, setSelectedSong] = useState<ISong | null>(null);

  //* Effects
  useEffect(() => {
    const unsubscribe = suscribe();
    return () => unsubscribe?.();
  }, []);

  useEffect(() => {
    if (!songs.length) return;

    //* TRIE
    const newTrie = new Trie();

    songs.forEach((song) => {
      newTrie.insert(song);
    });

    //* GRAPH
    const newGraph = new Graph();

    songs.forEach((song) => {
      newGraph.addSong(song);
    });

    newGraph.buildConnections();

    //* GUARDAR ESTRUCTURAS
    setTrie(newTrie);
    setGraph(newGraph);
  }, [songs, suscribe]);

  useEffect(() => {
    if (!selectedSong) return;

    const updatedSong = songs.find(
      (song) => song.title.toLowerCase() === selectedSong.title.toLowerCase(),
    );

    if (updatedSong) {
      setSelectedSong(updatedSong);
    }
  }, [songs]);

  //* Functions

  // ? Crear canción
  const createSong = async (data: ISong): Promise<string | null> => {
    try {
      const id = await add(data);

      if (!id) {
        return "Error al crear la canción";
      }

      return null;
    } catch (error) {
      console.error("Error creating song:", error);
      return "Error al crear la canción";
    }
  };

  // ? Buscar canción
  const findSong = (query: string) => {
    //* Buscar coincidencia exacta
    const exactSong = songs.find(
      (song) => song.title.toLowerCase() === query.toLowerCase(),
    );

    //* Guardar coincidencia exacta
    setSearchedSong(exactSong || null);

    //* Buscar sugerencias por prefijo
    const suggestions = trie.searchByPrefix(query);

    //* Remover exacta de sugerencias
    const filteredSuggestions = suggestions.filter(
      (song) => song.title.toLowerCase() !== query.toLowerCase(),
    );

    setSuggestedPrefixSongs(filteredSuggestions);
    setIsSearched(true);
  };

  // ? Obtener top de canciones
  const getTopSongs = (k: number): ISong[] => {
    // Crear heap temporal
    const tempHeap = new MaxHeap([...songs]);
    const topSongs: ISong[] = [];

    for (let i = 0; i < k; i++) {
      const song = tempHeap.pop();

      if (!song) break;

      topSongs.push(song);
    }

    return topSongs;
  };

  const getRecommendations = (song: ISong) => {
    return graph.getRecommendations(song);
  };

  return {
    songs,
    searchedSong,
    suggestedPrefixSongs,
    selectedSong,
    isSearched,
    loading,
    error,
    createSong,
    findSong,
    setSelectedSong,
    getTopSongs,
    getRecommendations,
  };
};
