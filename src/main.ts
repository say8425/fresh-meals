import { api, Request, Response, schedule } from "@serverless/cloud";

import { storeMeals } from "./services";
import { getTodayLaunches } from "./services/get-today-launches";

schedule.every("1 hour", async () => {
  await storeMeals();
});

api.get(
  "/meals/today/launch",
  async (_request: Request, response: Response) => {
    const meals = await getTodayLaunches();
    response.json(meals);
  },
);
