import { usePlayerStore } from "@/store/playerStore";

const PlayerVolumeControls = () => {
  const { setVolume, toggleMute } = usePlayerStore((state) => state);

  const handleSeekVolume = (val: number) => {
    if (val < 0 || val > 1) return;
    setVolume(val);
  };

  return (
    <>
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
    </>
  );
};
export default PlayerVolumeControls;
