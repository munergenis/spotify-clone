import { z, defineCollection, reference } from "astro:content";
import { Colors } from "@/lib/colors";

const categoriesCollection = defineCollection({
  type: "data",
  schema: z.object({
    type: z.literal("category"),
    title: z.string().min(2),
    cover: z.string().url(),
    color: z.nativeEnum(Colors),
    tags: z.array(z.string().min(2)),
  }),
});

const songsCollection = defineCollection({
  type: "content",
  schema: z.object({
    type: z.literal("song"),
    title: z.string().min(2),
    artists: z.array(z.string().min(2)),
    src: z
      .string()
      .refine((str) => str.endsWith(".mp3") && str.startsWith("/music/")),
    image: z.string().url(),
    categoriesId: reference("categories"),
    tags: z.array(z.string().min(2)),
  }),
});

export const collections = {
  categories: categoriesCollection,
  songs: songsCollection,
};
