export default function MealsLoadingPage() {
  return (
    <main className="container mx-auto">
      <div className="flex animate-pulse">
        <div className="ms-4 mt-2 w-full ">
          <h3 className="mt-5 h-64 bg-gray-200 rounded-full dark:bg-gray-700 "></h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="mt-5 space-y-3">
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            </ul>
            <ul className="mt-5 space-y-3">
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              <li className="w-full h-24 bg-gray-200 rounded-full dark:bg-gray-700"></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
