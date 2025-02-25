import { Pause, Play } from "@/icons/PlayerIcons";
import { usePlayerStore } from "@/store/playerStore";

const PlayerControlButtons = () => {
  const { currentSong, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );

  const toggleIsPlaying = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button
        className="cursor-pointer bg-white p-3 rounded-full text-black"
        onClick={toggleIsPlaying}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </>
  );
};
export default PlayerControlButtons;
