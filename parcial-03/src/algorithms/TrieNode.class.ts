import type { ISong } from "../interfaces/ISong.interface";

export default class TrieNode {
  isEndOfWord: boolean;
  children: Record<string, TrieNode>;
  songs: ISong[];

  constructor() {
    this.isEndOfWord = false;
    this.children = {};
    this.songs = [];
  }
}