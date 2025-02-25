import AudioPlayer from "@/components/player/AudioPlayer";
import PlayerControlButtons from "@/components/player/PlayerControlButtons";
import PlayerControlProgressBar from "@/components/player/PlayerControlProgressBar";
import { useRef } from "react";

const PlayerControls = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  return (
    <>
      <div className="flex justify-center">
        <PlayerControlButtons />
      </div>

      <div className="flex flex-col items-center w-full">
        <PlayerControlProgressBar audioRef={audioRef} />
      </div>

      <div className="py-10 absolute inset-x-0 w-fit mx-auto -top-20 opacity-40 hover:opacity-100 hover:transform hover:translate-y-12 transition duration-200">
        <AudioPlayer audioRef={audioRef} />
      </div>
    </>
  );
};
export default PlayerControls;
