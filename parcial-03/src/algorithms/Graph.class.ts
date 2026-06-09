import type { ISong } from "../interfaces/ISong.interface";

export default class Graph {
  public songs: Map<string, ISong>;
  public adjList: Map<string, string[]>;

  constructor() {
    this.songs = new Map();
    this.adjList = new Map();
  }

  //* AGREGAR CANCIÓN
  addSong(song: ISong) {
    if (!song.id) return;

    this.songs.set(song.id, song);

    if (!this.adjList.has(song.id)) {
      this.adjList.set(song.id, []);
    }
  }

  //* CONECTAR
  addEdge(song1: ISong, song2: ISong) {
    if (!song1.id || !song2.id) return;

    if (song1.id === song2.id) return;

    const list1 = this.adjList.get(song1.id);
    const list2 = this.adjList.get(song2.id);

    if (!list1 || !list2) return;

    if (!list1.includes(song2.id)) {
      list1.push(song2.id);
    }

    if (!list2.includes(song1.id)) {
      list2.push(song1.id);
    }
  }

  //* BUILD CONNECTIONS
  buildConnections() {
    const songsArray = Array.from(this.songs.values());

    for (let i = 0; i < songsArray.length; i++) {
      for (let j = i + 1; j < songsArray.length; j++) {
        const song1 = songsArray[i];
        const song2 = songsArray[j];

        //* ARTISTAS
        const artists1 = song1.artist
          .toLowerCase()
          .split(",")
          .map((a) => a.trim());

        const artists2 = song2.artist
          .toLowerCase()
          .split(",")
          .map((a) => a.trim());

        const sameArtist = artists1.some((artist) => artists2.includes(artist));

        //* GÉNEROS
        const genres1 = song1.genre
          .toLowerCase()
          .split(",")
          .map((g) => g.trim());

        const genres2 = song2.genre
          .toLowerCase()
          .split(",")
          .map((g) => g.trim());

        const sameGenre = genres1.some((genre) => genres2.includes(genre));

        if (sameArtist || sameGenre) {
          this.addEdge(song1, song2);
        }
      }
    }
  }

  //* RECOMENDACIONES
  getRecommendations(song: ISong): ISong[] {
    if (!song.id) return [];

    const connectedIds = this.adjList.get(song.id) || [];

    return connectedIds
      .map((id) => this.songs.get(id))
      .filter(Boolean) as ISong[];
  }
}
