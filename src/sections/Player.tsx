import { Pause, Play } from "@/icons/PlayerIcons";
import { getSongCategories } from "@/lib/utils";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const volume = usePlayerStore((state) => state.volume);
  const currentTime = usePlayerStore((state) => state.currentTime);
  const duration = usePlayerStore((state) => state.duration);
  const playlist = usePlayerStore((state) => state.playlist);
  const playlistIndex = usePlayerStore((state) => state.playlistIndex);
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const setCurrentTime = usePlayerStore((state) => state.setCurrentTime);
  const setDuration = usePlayerStore((state) => state.setDuration);
  const setPlaylistIndex = usePlayerStore((state) => state.setPlaylistIndex);
  const setMediaId = usePlayerStore((state) => state.setMediaId);
  const clearPlaylist = usePlayerStore((state) => state.clearPlaylist);
  const toggleMute = usePlayerStore((state) => state.toggleMute);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleIsPlaying = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeekVolume = (val: number) => {
    if (val < 0 || val > 1) return;
    setVolume(val);
  };

  // handles player music track
  useEffect(() => {
    console.log("CurrentSong changed to", currentSong?.src);
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.src;
      setCurrentTime("0:00");
      audioRef.current.play();
    }
  }, [currentSong]);

  // handles player playing state
  useEffect(() => {
    console.log("isPlaying Changed to", isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // handles player volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // handles player song end
  const handleOnSongEnded = () => {
    if (playlist && playlist?.length - 1 > playlistIndex) {
      setPlaylistIndex(playlistIndex + 1);
      setCurrentSong(playlist[playlistIndex + 1]);
    } else {
      setMediaId(null);
      clearPlaylist();
      setPlaylistIndex(0);
      setCurrentSong(null);
      setCurrentTime("0:00");
      setDuration("0:00");
      setIsPlaying(false);
    }
  };

  // manage currentTime renders
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        const time = audioRef.current.currentTime;
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60)
          .toString()
          .padStart(2, "0");
        const currentTimeString = `${min}:${sec}`;
        setCurrentTime(currentTimeString);
      }
    };

    let currentTimeInterval: number;
    if (isPlaying) {
      console.log("timer effect triggers");

      currentTimeInterval = setInterval(() => {
        updateCurrentTime();
      }, 250);
    }

    return () => {
      if (currentTimeInterval) {
        console.log("timmer effect cleared");
        clearInterval(currentTimeInterval);
      }
    };
  }, [isPlaying]);

  const handleSetDuration = ({
    currentTarget,
  }: {
    currentTarget: EventTarget & HTMLAudioElement;
  }) => {
    const duration = currentTarget.duration;
    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration % 60);
    const durationString = `${min}:${sec.toString().padStart(2, "0")}`;
    setDuration(durationString);
  };

  return (
    <div className="flex h-full gap-x-18 items-center p-4">
      <div className="h-full basis-1/4 shrink-0 flex items-center gap-x-4">
        {currentSong && (
          <>
            <picture className="h-full bg-blue-400 rounded-md overflow-hidden">
              <img
                className="h-full object-cover aspect-square"
                src={currentSong?.image}
                alt=""
              />
            </picture>
            <div className="pt-2 truncate">
              <div className="text-white truncate">{currentSong?.title}</div>
              <div className="text-sm truncate">
                {currentSong &&
                  getSongCategories(currentSong)
                    .map(({ title }) => title)
                    .join(", ")}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="basis-1/2 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <button
            className="cursor-pointer bg-white p-3 rounded-full text-black"
            onClick={toggleIsPlaying}
          >
            {isPlaying ? <Pause className="" /> : <Play />}
          </button>
        </div>

        <div className="flex justify-center">
          {currentTime} - {duration}
        </div>
      </div>

      <div className="text-3xl text-black basis-1/4 shrink-0 flex items-center justify-end">
        <p className="text-sm text-white mr-4">Volume</p>
        <button
          className="text-xl p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={toggleMute}
        >
          <span>X</span>
          <div className="text-sm">mute</div>
        </button>
        <button
          className="text-xl p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleSeekVolume(0.2)}
        >
          <span>0.2</span>
          <div className="text-sm">seek</div>
        </button>
        <button
          className="text-xl p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleSeekVolume(0.4)}
        >
          <span>0.4</span>
          <div className="text-sm">seek</div>
        </button>
        <button
          className="text-xl p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleSeekVolume(0.8)}
        >
          <span>0.8</span>
          <div className="text-sm">seek</div>
        </button>
      </div>

      <div className="py-10 absolute inset-x-0 w-fit mx-auto -top-20 opacity-40 hover:opacity-100 hover:transform hover:translate-y-12 transition duration-200">
        <audio
          ref={audioRef}
          controls
          // TODO
          loop={false}
          // onChange={}
          // onSeeked={}
          // onSeeking={}
          onEnded={handleOnSongEnded}
          onLoadedMetadata={handleSetDuration}
        />
      </div>
    </div>
  );
};
export default Player;
