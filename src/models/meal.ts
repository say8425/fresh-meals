import { GetWeekMealResponse } from "../fetches";

type Corner = "TAKE OUT" | "스페셜" | "백반";
type Meal = {
  mealIdx: number;
  mbrMealIdx: number;
  main: string;
  sides: string[];
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  salt: number;
  thumbnailUrl: string;
  corner: Corner;
  rating: number;
  logged: boolean;
  loggedAll: boolean;
  mealDt: string;
  status: number;
  mealCd: string;
  moHour: string;
  tuHour: string;
  weHour: string;
  thHour: string;
  frHour: string;
  saHour: string;
  suHour: string;
  moMinute: string;
  tuMinute: string;
  weMinute: string;
  thMinute: string;
  frMinute: string;
  saMinute: string;
  suMinute: string;
  caloriesYn: string;
};

export const generateMeals = (data: GetWeekMealResponse["data"]): Meal[] => {
  return Object.entries(data)
    .flatMap(([, values]) => Object.values(values).flat())
    .filter(Boolean)
    .map((data) => {
      const { name, side, ...rest } = data;
      const main = name;
      const sides = side.split(", ");
      return {
        ...rest,
        main,
        sides,
      } as Meal;
    });
};
