import { api, Request, Response, schedule } from "@serverless/cloud";

import {
  getThisWeekLaunchMeals,
  getTodayLaunchMeals,
  storeMeals,
} from "./services";

schedule.every("1 hour", async () => {
  await storeMeals();
});

api.get(
  "/meals/today/launch",
  async (_request: Request, response: Response) => {
    const meals = await getTodayLaunchMeals();
    response.json(meals);
  },
);

api.get(
  "/meals/this-week/launch",
  async (_request: Request, response: Response) => {
    const meals = await getThisWeekLaunchMeals();
    response.json(meals);
  },
);
