import { DateTime } from "luxon";

export const lastDaysDate = (days: number) => {
  const today = DateTime.now();

  return today.minus({days}).toFormat('yyyy-MM-dd');
}

export const convertFormat = (date: string, toFormat: string, currentFormat = 'yyyy-MM-dd') => {
  const dateTime = DateTime.fromFormat(date, currentFormat);
  
  if(dateTime) {
    return dateTime.toFormat(toFormat);
  }
}

export const generateSerieByLastDays = (days: number) => {
  const today = DateTime.now();
  const series = [];
  for(let i = days; i >= 1; i--) {
    series.push(today.minus({days: i}).toFormat('d/M'))
  }
  series.push(today.toFormat('d/M'));

  return series;
}
