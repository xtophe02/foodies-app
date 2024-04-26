"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const mealSchema = z.object({
  creator: z.string().min(3),
  creator_email: z.string().email(),
  title: z.string().min(3),
  summary: z.string().min(3),
  instructions: z.string().min(3),
  image: z.object({
    size: z.number().min(0).max(MAX_FILE_SIZE),
    type: z.string().regex(/image\/(png|jpeg|jpg|gif)/),
  }),
});

export async function shareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  // console.log(meal.image);
  const parsed = mealSchema.safeParse(meal);
  if (!parsed.success) {
    return { error: parsed.error.format() };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
