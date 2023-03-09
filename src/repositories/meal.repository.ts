import { data } from "@serverless/cloud";

import { Corner, Meal, Slot } from "../models";

const mealKey = (
  mealedAt: string,
  slot: Slot | "*",
  corner: Corner | "*",
): string => {
  return `meal:${mealedAt}:${slot}:${corner}`;
};

export const createMeal = async (meal: Meal) => {
  const key = mealKey(meal.mealedAt, meal.slot, meal.corner);
  await data.set(key, meal, {
    ttl: 60 * 60 * 24 * 7,
    overwrite: true,
  });
};

export const getMeal = async (mealedAt: string, slot: Slot, corner: Corner) => {
  const key = mealKey(mealedAt, slot, corner);
  return await data.get<Meal>(key);
};

export const getMeals = async (
  mealedAt: string,
  slot?: Slot,
  corner?: Corner,
) => {
  const key = mealKey(mealedAt, slot ?? "*", corner ?? "*");
  return await data.get<Meal>(key);
};
