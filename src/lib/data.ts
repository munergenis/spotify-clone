import { colors } from "./colors";

export interface Category {
  type: "category";
  id: string;
  slug: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
}

export const categories: Category[] = [
  {
    type: "category",
    id: "a",
    slug: "1-fe",
    title: "Fe",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    type: "category",
    id: "b",
    slug: "1-gloria",
    title: "Gloria",
    color: colors.red,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
  },
  {
    type: "category",
    id: "c",
    slug: "3-altres",
    title: "Altres",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    type: "category",
    id: "d",
    slug: "4-altres-c",
    title: "Altres C",
    color: colors.red,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
  },
  {
    type: "category",
    id: "e",
    slug: "5-gent",
    title: "Gent",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    type: "category",
    id: "f",
    slug: "6-festa",
    title: "Festa",
    color: colors.red,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
  },
];

const homeCategoriesDict = ["Fe", "Gloria", "Altres", "Altres C"];

export const homeCategories = categories.filter((category) =>
  homeCategoriesDict.includes(category.title)
);

export const moreCategories = categories.map((item) => ({
  ...item,
  slug: item.slug + "_more",
}));

export const sidebarCategories = categories.map((item) => ({
  ...item,
  slug: item.slug + "_side",
}));

export const allCategories = [
  ...categories,
  ...moreCategories,
  ...sidebarCategories,
];

export interface Song {
  type: "song";
  id: string;
  slug: string;
  src: string;
  categoriesId: string[];
  title: string;
  image: string;
  artists: string[];
  duration: number;
}

export const songs: Song[] = [
  {
    type: "song",
    id: "1",
    slug: "1-moonlit-walk",
    src: "/music/1/01.mp3",
    categoriesId: ["a"],
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 177,
  },
  {
    type: "song",
    id: "2",
    slug: "2-coffee-daze",
    src: "/music/1/03.mp3",
    categoriesId: ["a"],
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 220,
  },
  {
    type: "song",
    id: "3",
    slug: "3-skyline-serenade",
    src: "/music/1/05.mp3",
    categoriesId: ["b"],
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 209,
  },
  {
    type: "song",
    id: "4",
    slug: "4-urban-echoes",
    src: "/music/2/02.mp3",
    categoriesId: ["b"],
    title: "Urban Echoes",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 131,
  },
  {
    type: "song",
    id: "5",
    slug: "5-nights-end",
    src: "/music/2/04.mp3",
    categoriesId: ["c"],
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 146,
  },
  {
    type: "song",
    id: "6",
    slug: "1-silent-rain",
    src: "/music/3/03.mp3",
    categoriesId: ["d"],
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 158,
  },
  {
    type: "song",
    id: "7",
    slug: "2-lost-pages",
    src: "/music/4/01.mp3",
    categoriesId: ["e"],
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 160,
  },
  {
    type: "song",
    id: "8",
    slug: "3-midnight-tales",
    src: "/music/4/04.mp3",
    categoriesId: ["e"],
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 173,
  },
  {
    type: "song",
    id: "9",
    slug: "4-city-ligths",
    src: "/music/5/02.mp3",
    categoriesId: ["f"],
    title: "City Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 191,
  },
];

const homeSongsDict = [
  "Moonlit Walk",
  "Coffee Daze",
  "Skyline Serenade",
  "Urban Echoes",
];

export const homeSongs = songs.filter((song) =>
  homeSongsDict.includes(song.title)
);
