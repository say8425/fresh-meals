import { data } from "@serverless/cloud";

import { Corner, Meal, Slot } from "../models";

export const getMeals = async (
  mealedAt: string,
  slot?: Slot,
  corner?: Corner,
) => {
  return await data.get<Meal>(
    `meal:${mealedAt}:${slot ?? "*"}:${corner ?? "*"}`,
  );
};
