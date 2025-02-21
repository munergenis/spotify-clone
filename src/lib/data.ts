import { colors } from "./colors";

export interface Category {
  id: number;
  slug: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "1-fe",
    title: "Fe",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    id: 2,
    slug: "1-gloria",
    title: "Gloria",
    color: colors.red,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
  },
  {
    id: 3,
    slug: "3-altres",
    title: "Altres",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    id: 4,
    slug: "4-altres-c",
    title: "Altres C",
    color: colors.red,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
  },
  {
    id: 5,
    slug: "5-gent",
    title: "Gent",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
  },
  {
    id: 6,
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
  id: number;
  slug: string;
  categoriesId: number[];
  title: string;
  image: string;
  artists: string[];
  duration: number;
}

export const songs: Song[] = [
  {
    id: 1,
    slug: "1-moonlit-walk",
    categoriesId: [1],
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 177,
  },
  {
    id: 2,
    slug: "2-coffee-daze",
    categoriesId: [1],
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 220,
  },
  {
    id: 3,
    slug: "3-skyline-serenade",
    categoriesId: [1],
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 209,
  },
  {
    id: 4,
    slug: "4-urban-echoes",
    categoriesId: [1],
    title: "Urban Echoes",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 131,
  },
  {
    id: 5,
    slug: "5-nights-end",
    categoriesId: [1],
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    duration: 146,
  },
  {
    id: 1,
    slug: "1-silent-rain",
    categoriesId: [2],
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 158,
  },
  {
    id: 2,
    slug: "2-lost-pages",
    categoriesId: [2],
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 160,
  },
  {
    id: 3,
    slug: "3-midnight-tales",
    categoriesId: [2],
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    duration: 173,
  },
  {
    id: 4,
    slug: "4-city-ligths",
    categoriesId: [2],
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
