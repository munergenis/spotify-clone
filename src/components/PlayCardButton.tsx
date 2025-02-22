import { Play } from "@/icons/PlayerIcons";
import { categories, songs, type Category, type Song } from "@/lib/data";

const style: Record<"big" | "small", string> = {
  big: "size-14 bottom-4 right-4",
  small: "size-8 lg:size-10 inset-y-0 right-2 my-auto",
};

function getCategory(id: number) {
  return categories.find((category) => category.id === id);
}
function getCategorySongs(id: number) {
  return songs.filter((song) => song.categoriesId.includes(id));
}
function getSong(id: number) {
  return songs.find((song) => song.id === id);
}
function getSongCategories(id: number) {
  return (
    getSong(id)
      ?.categoriesId.map(getCategory)
      .filter((category) => category !== undefined) // filters out undefined entries
      .map(({ title, slug }) => ({ title, slug })) ?? []
  );
}

const PlayCardButton = ({
  size = "big",
  media,
}: {
  size?: "big" | "small";
  media: Song | Category;
}) => {
  return (
    <button
      className={`absolute grid place-content-center opacity-0 bg-play-card rounded-full cursor-pointer group-hover:opacity-100 hover:bg-play-card-hover/90 hover:scale-105 transition duration-300 ${style[size]}`}
    >
      <Play
        className={`text-black ${
          size === "small" ? "size-2 lg:size-4" : "size-6"
        }`}
      />
    </button>
  );
};
export default PlayCardButton;
