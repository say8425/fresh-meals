import { getWeekMeal } from "./fetches";
import { generateMeals } from "./models";

const data = await getWeekMeal();
generateMeals(data);
