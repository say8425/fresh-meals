import { schedule } from "@serverless/cloud";

import { storeMeals } from "./services";

schedule.every("1 hour", async () => {
  await storeMeals();
});
