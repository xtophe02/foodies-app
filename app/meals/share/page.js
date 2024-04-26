"use client";
import ImagePicker from "@/components/image-picker";
import { shareMeal } from "@/utils/actions";
import { useFormState } from "react-dom";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMeals() {
  const [state, formAction] = useFormState(shareMeal, { error: null });
  console.log(state);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
            Share your favorite meal
          </h2>
        </div>

        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
          <form action={formAction}>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Full name"
              />
              {state.error?.creator && (
                <p className="text-sm text-red-600 mt-2">
                  {state.error.creator._errors.join("; ")}
                </p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Email address"
              />
              {state.error?.creator_email && (
                <p className="text-sm text-red-600 mt-2">
                  {state.error.creator_email._errors.join("; ")}
                </p>
              )}
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Title"
              />
              {state.error?.title && (
                <p className="text-sm text-red-600 mt-2">
                  {state.error.title._errors.join("; ")}
                </p>
              )}
            </div>

            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="summary"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Summary
              </label>
              <div className="mt-1">
                <textarea
                  name="summary"
                  id="summary"
                  rows="3"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Leave your comment here..."
                ></textarea>
                {state.error?.summary && (
                  <p className="text-sm text-red-600 mt-2">
                    {state.error.summary._errors.join("; ")}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="instructions"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Instructions
              </label>
              <div className="mt-1">
                <textarea
                  id="instructions"
                  name="instructions"
                  rows="3"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Leave your comment here..."
                ></textarea>
                {state.error?.instructions && (
                  <p className="text-sm text-red-600 mt-2">
                    {state.error.instructions._errors.join("; ")}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ImagePicker
                label="Image"
                name="image"
                error={state.error?.image}
              />
            </div>

            <div className="mt-6 grid">
              <MealsFormSubmit />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
