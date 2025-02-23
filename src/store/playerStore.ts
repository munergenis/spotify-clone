import type { Category, Song } from "@/lib/data";
import { create } from "zustand";

export interface PlayerStore {
  isPlaying: boolean;
  mediaId: string | null;
  playlist: Song[] | null;
  playlistIndex: number;
  currentSong: Song | null;
  duration: string;
  currentTime: string;
  volume: number;
  prevVolume: number;
  setIsPlaying: (isPlaying: boolean) => void;
  setMediaId: (mediaId: string | null) => void;
  setPlaylist: (playlist: Song[]) => void;
  clearPlaylist: () => void;
  setPlaylistIndex: (index: number) => void;
  setCurrentSong: (currentSong: Song | null) => void;
  setDuration: (duration: string) => void;
  setCurrentTime: (currentTime: string) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  isPlaying: false,
  mediaId: null,
  playlist: null,
  playlistIndex: 0,
  currentSong: null,
  duration: "0:00",
  currentTime: "0:00",
  volume: 0.6,
  prevVolume: 0.6,

  setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
  setMediaId: (mediaId) => set({ mediaId }),
  setPlaylist: (playlist) => set({ playlist }),
  clearPlaylist: () => set({ playlist: null }),
  setPlaylistIndex: (index) => set({ playlistIndex: index }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setDuration: (duration) => set({ duration }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setVolume: (volume) => set({ volume }),

  toggleMute: () => {
    const { volume, prevVolume } = get();
    if (volume === 0) {
      set({ volume: prevVolume });
    } else {
      set({ volume: 0, prevVolume: volume });
    }
  },
}));
