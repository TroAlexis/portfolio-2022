import { pluralize } from "@/utils/string";

export const getDatesDelta = (from: Date, to: Date) => {
  return Math.abs(from.getTime() - to.getTime());
};

export const getDatesDeltaInMonths = (from: Date, to: Date) => {
  return Math.round(getDatesDelta(from, to) / (1000 * 3600 * 24 * 30));
};

export const getDatesDeltaInYearsAndMonths = (from: Date, to: Date) => {
  const delta = getDatesDeltaInMonths(from, to);
  const years = Math.floor(delta / 12);
  const months = delta % 12;

  const result: string[] = [`${pluralize(months, "month")}`];

  if (years) {
    result.unshift(`${pluralize(years, "year")}`);
  }

  return result.join(", ");
};
