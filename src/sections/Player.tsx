import { Pause, Play } from "@/icons/PlayerIcons";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleIsPlaying = () => {
    if (!currentSong) {
      setCurrentSong("/music/1/03.mp3");
      setIsPlaying(!isPlaying);
    }

    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStepVolume = (val: number) => {
    if (audioRef.current) {
      if (val > 0 && audioRef.current.volume + val > 1) {
        audioRef.current.volume = 1;
        return;
      } else if (val < 0 && audioRef.current.volume + val < 0) {
        audioRef.current.volume = 0;
        return;
      }
      audioRef.current.volume += val;
    }
  };

  const handleSeekVolume = (val: number) => {
    if (val > 1 || val < 0) return;

    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  // load current song on audio player every time currentSong state changes
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong;
    }
  }, [currentSong]);

  // handle playing state change on player every time global state changes
  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="flex h-full gap-x-18 items-center">
      <div className="bg-amber-100/10 basis-1/4 shrink-0 flex items-center">
        Song
      </div>

      <div className="bg-amber-100/10 basis-1/2 flex justify-center">
        <button
          className="cursor-pointer bg-white p-3 rounded-full text-black"
          onClick={toggleIsPlaying}
        >
          {isPlaying ? <Pause className="" /> : <Play />}
        </button>
      </div>

      <div className="bg-amber-100/10 text-3xl text-black basis-1/4 shrink-0 flex items-center justify-end">
        <button
          className="p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleStepVolume(0.05)}
        >
          +
        </button>
        <button
          className="text-xl p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleSeekVolume(0.5)}
        >
          <span>1/2</span>
          <div className="text-sm">seek</div>
        </button>
        <button
          className="p-2 cursor-pointer w-14 h-14 bg-white rounded-full"
          onClick={() => handleStepVolume(-0.05)}
        >
          -
        </button>
      </div>

      <div className="py-10 absolute inset-x-0 w-fit mx-auto -top-20 opacity-40 hover:opacity-100 hover:transform hover:translate-y-12 transition duration-200">
        <audio
          ref={audioRef}
          controls
          // TODO
          loop={true}
          // muted={false}
          // onChange={}
          // onSeeked={}
          // onSeeking={}
          // onTimeUpdate={}
          // onVolumeChange={}
          // resource=""
          // src=""
        />
      </div>
    </div>
  );
};
export default Player;
