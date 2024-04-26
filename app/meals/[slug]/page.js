import { getMeal } from "@/utils/db";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

function MealInstructions({ instructions }) {
  // Split the instructions string into an array based on the numbers
  const instructionsArray = instructions.split(/\d+\./);

  // Remove the first element if it's an empty string (due to the split operation)
  if (instructionsArray[0] === "") {
    instructionsArray.shift();
  }

  // Map over the array and render each instruction in a <p> tag
  return (
    <ol className="list-decimal list-inside text-gray-800 dark:text-white">
      {instructionsArray.map((instruction, index) => (
        <li key={index} className="mt-2 text-white/[.8]">
          {instruction}
        </li>
      ))}
    </ol>
  );
}

export default async function Meal({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <a
        className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href={`mailto:${meal.creator_email}`}
      >
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[750px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <Image
            fill
            className="size-full absolute top-0 start-0 object-cover"
            src={meal.image}
            alt={meal.title}
            priority={false}
          />
        </div>

        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="size-[46px] border-2 border-white rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-white">{meal.creator}</h4>
                <p className="text-xs text-white/[.8]">@{meal.creator_email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
              {meal.title}
            </h3>
            <p className="mt-2 text-white font-medium italic">{meal.summary}</p>
            {meal.instructions && (
              <MealInstructions instructions={meal.instructions} />
            )}
            {/* <p
              className="mt-2 text-white/[.8]"
              dangerouslySetInnerHTML={{
                __html: meal.instructions,
              }}
            ></p> */}
          </div>
        </div>
      </a>
    </div>
  );
}
