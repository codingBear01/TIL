export function addDays(date, daysToAdd) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd); // Shift the date by the number of days specified
  return clone;
}

export function getWeek(forDate, daysOffset = 0) {
  const date = addDays(forDate, daysOffset); // Immediately shift the date
  const day = date.getDay(); // Get the day index for the new date, for example, Tuesday = 2

  return {
    date,
    start: addDays(date, -day), // For example, if it's Tuesday, shift back by 2 days
    end: addDays(date, 6 - day), // For example, if it's Tuesday, shift forward by 4 days
  };
}
