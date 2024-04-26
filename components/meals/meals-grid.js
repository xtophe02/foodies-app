import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  // console.log(meals ? meals[0] : "No meals");
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
      </div>
    </div>
  );
}
