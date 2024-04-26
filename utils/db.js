"use server";
import { createClient } from "@/utils/supabase/server.js";
// import { resolve } from "styled-jsx/css";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const supabase = createClient();
  const { data, error } = await supabase.from("meals").select();
  if (error) {
    console.error(error);
  }
  // console.log(data);
  // throw new Error("This is an error");
  return data;
}

export async function getMeal(slug) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("meals")
    .select()
    .eq("slug", slug)
    .single();
  if (error) {
    console.error(error);
  }
  return data;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);

  const buffer = await meal.image.arrayBuffer();

  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Error writing file");
    }
  });

  meal.image = `/images/${filename}`;
  const supabase = createClient();
  const { data, error } = await supabase.from("meals").insert([meal]);
  if (error) {
    console.error(error);
  }
  console.log(data);
}
