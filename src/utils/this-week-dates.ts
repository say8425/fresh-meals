import dayjs from "dayjs";

import { isTodayWeekend } from "./is-today-weekend";

export const thisWeekDates = () => {
  const weekOffset = isTodayWeekend() ? 7 : 0;

  return [
    dayjs().day(1 + weekOffset), // Monday
    dayjs().day(2 + weekOffset), // Tuesday
    dayjs().day(3 + weekOffset), // Wednesday
    dayjs().day(4 + weekOffset), // Thursday
    dayjs().day(5 + weekOffset), // Friday
  ];
};
