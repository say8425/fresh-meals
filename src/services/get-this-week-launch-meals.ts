import dayjs from "dayjs";

import { formatMealedAt } from "../models";
import { getMeals } from "../repositories";

export const getThisWeekLaunchMeals = async () => {
  const thisWeekDates = [
    dayjs().day(1), // Monday
    dayjs().day(2), // Tuesday
    dayjs().day(3), // Wednesday
    dayjs().day(4), // Thursday
    dayjs().day(5), // Friday
  ];
  return await Promise.all(
    thisWeekDates.map(async (date) => {
      const mealedAt = formatMealedAt(date);
      return await getMeals(mealedAt, "점심");
    }),
  );
};
