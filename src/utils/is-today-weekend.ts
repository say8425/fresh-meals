import dayjs from "dayjs";

export const isTodayWeekend = () => {
  const day = dayjs().day();
  return day === 0 || day === 6;
};
