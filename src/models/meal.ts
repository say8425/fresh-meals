import dayjs from "dayjs";

import { GetWeekMealResponse, MealSource } from "../fetches";

export type Slot = "아침" | "점심" | "저녁";
export type Corner = "TAKE OUT" | "스페셜" | "백반" | "";
export type Meal = {
  id: number;
  corner: Corner;
  slot: Slot;
  main: string;
  sides: string[];
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  salt: number;
  thumbnailUrl: string;
  rating: number;
  mealedAt: string;
};

const sides = (value: MealSource["side"]): string[] => {
  return value
    .split(", ")
    .filter(Boolean)
    .filter((value) => value !== "+사이드");
};

const corner = (value: MealSource["corner"]): Corner => {
  switch (value) {
    case "TAKE OUT": {
      return "TAKE OUT";
    }
    case "스페셜": {
      return "스페셜";
    }
    case "백반": {
      return "백반";
    }
    default: {
      return "";
    }
  }
};

const slot = (value: MealSource["mealCd"]): Slot => {
  switch (value) {
    case "1": {
      return "아침";
    }
    case "2": {
      return "점심";
    }
    case "3": {
      return "저녁";
    }
    default: {
      return "점심";
    }
  }
};

export const formatMealedAt = (value: string | Date | dayjs.Dayjs): string => {
  return dayjs(value).format("YYYY-MM-DD");
};

export const generateMeals = (data: GetWeekMealResponse["data"]): Meal[] => {
  return Object.entries(data)
    .flatMap(([, values]) => Object.values(values).flat())
    .filter(Boolean)
    .map(
      (data): Meal => ({
        id: data.mealIdx,
        corner: corner(data.corner),
        slot: slot(data.mealCd),
        main: data.name,
        sides: sides(data.side),
        kcal: data.kcal,
        carb: data.carb,
        protein: data.protein,
        fat: data.fat,
        salt: data.salt,
        thumbnailUrl: data.thumbnailUrl,
        rating: data.rating,
        mealedAt: formatMealedAt(data.mealDt),
      }),
    );
};
