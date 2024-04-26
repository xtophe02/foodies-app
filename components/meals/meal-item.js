import Image from "next/image";
import Link from "next/link";

export default function MealItem({ meal }) {
  return (
    <Link
      className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/meals/${meal.slug}`}
    >
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src={meal.image}
            alt="Image Description"
            fill
            priority={false}
            sizes="100vw, 50vw, 33vw"
          />
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            {meal.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {meal.summary}
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            View Details
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  );
}
