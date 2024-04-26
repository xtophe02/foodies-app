"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className=" w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {pending ? (
        <span
          className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </span>
      ) : (
        <span>Submit</span>
      )}
    </button>
  );
}
