"use client";

import { useState } from "react";

export default function ImagePicker({ label, name, error }) {
  const [pickedImage, setPickedImage] = useState();
  function imageHandler(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <>
      <div>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name={name}
          accept="image/png, image/jpeg, image/jpg"
          id={name}
          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
        />
        {error && (
          <p className="text-sm text-red-600 mt-2">
            {error._errors.join("; ")}
          </p>
        )}
      </div>
      {pickedImage && (
        <div className="group flex-shrink-0 relative rounded-xl overflow-hidden w-56 h-44 mx-auto">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src={pickedImage}
            alt={name}
            fill
          />
        </div>
      )}
    </>
  );
}
