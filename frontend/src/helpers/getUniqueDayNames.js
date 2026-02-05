import { getDayOfWeek } from './getDayOfWeek';

export const getUniqueDayNames = (weatherDataHourly, maxDays = 5) => {
  if (!weatherDataHourly?.list) return [];

  const dayNames = new Set();
  const uniqueDayNames = [];

  for (const data of weatherDataHourly.list) {
    const dayName = getDayOfWeek(data.dt);

    if (!dayNames.has(dayName)) {
      dayNames.add(dayName);
      uniqueDayNames.push(dayName);

      if (uniqueDayNames.length === maxDays) break;
    }
  }

  return uniqueDayNames;
};
