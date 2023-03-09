import { mealedAt } from "../models";
import { getMeals } from "../repositories";

export const getTodayLaunches = async () => {
  const todayMealedAt = mealedAt(new Date());
  return await getMeals(todayMealedAt, "점심");
};
