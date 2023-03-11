import { formatMealedAt } from "../models";
import { getMeals } from "../repositories";
import { thisWeekDates } from "../utils/this-week-dates";

export const getThisWeekLaunchMeals = async () => {
  return await Promise.all(
    thisWeekDates().map(async (date) => {
      const mealedAt = formatMealedAt(date);
      return await getMeals(mealedAt, "점심");
    }),
  );
};
