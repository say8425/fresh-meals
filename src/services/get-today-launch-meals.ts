import { formatMealedAt } from "../models";
import { getMeals } from "../repositories";

export const getTodayLaunchMeals = async () => {
  const todayMealedAt = formatMealedAt(new Date());
  return await getMeals(todayMealedAt, "점심");
};
