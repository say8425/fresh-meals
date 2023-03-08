import { data } from "@serverless/cloud";

import { Meal } from "../models";

export const createMeal = async (meal: Meal) => {
  await data.set(`meal:${meal.mealedAt}:${meal.slot}:${meal.corner}`, meal, {
    ttl: 60 * 60 * 24 * 7,
    overwrite: true,
  });
};
