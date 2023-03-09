import { params } from "@serverless/cloud";

export type MealSource = {
  mealIdx: number;
  mbrMealIdx: number;
  name: string;
  side: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  salt: number;
  thumbnailUrl: string;
  corner: string;
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
type Meals = Record<number, MealSource[] | []>;
type GetWeekMealResponseData = {
  tu: Meals;
  mo: Meals;
  su: Meals;
  th: Meals;
  fr: Meals;
  we: Meals;
  sa: Meals;
};
export type GetWeekMealResponse = {
  status: string;
  retCode: string;
  retMsg: string;
  date: string;
  data: GetWeekMealResponseData;
};
export const getWeekMeal = async (): Promise<GetWeekMealResponseData> => {
  const { storeIdx } = params;
  const url = new URL("https://front.cjfreshmeal.co.kr/meal/v1/week-meal");
  url.search = new URLSearchParams({
    storeIdx,
    weekType: "1",
  }).toString();
  const response = await fetch(url, {
    method: "GET",
  });
  const { data } = await response.json();
  return data;
};
