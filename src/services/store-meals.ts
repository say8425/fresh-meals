import { getWeekMeal } from "../fetches";
import { generateMeals } from "../models";
import { createMeal } from "../repositories";

export const storeMeals = async () => {
  const thisWeekMeals = await getWeekMeal();
  const meals = generateMeals(thisWeekMeals);
  for (const meal of meals) {
    await createMeal(meal);
  }
};
