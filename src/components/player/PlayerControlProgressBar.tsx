import { Slider } from "@/components/ui/slider";
import { usePlayerStore } from "@/store/playerStore";

const PlayerControlProgressBar = () => {
  const { currentTime, duration } = usePlayerStore((state) => state);

  return (
    <>
      <Slider className="py-2" />
      <div className="flex w-full justify-between text-sm">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </>
  );
};
export default PlayerControlProgressBar;
