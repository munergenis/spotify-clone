import useAudioPlayer from "@/hooks/useAudioPlayer";

const AudioPlayer = () => {
  const { audioRef, handleOnSongEnded, handleSetDuration } = useAudioPlayer();
  return (
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
  );
};
export default AudioPlayer;
