export function getCalendarWeek(date) {
  const onejan = new Date(date.getFullYear(), 0, 1);
  const millisecsInDay = 86400000;
  const daysUntilDate = Math.ceil((date - onejan) / millisecsInDay);
  const calendarWeek = Math.ceil((daysUntilDate + onejan.getDay() + 1) / 7);

  return calendarWeek;
}

export function byMonth(month) {
  return function ({ date: dateString }) {
    return new Date(dateString).getMonth() === month;
  };
}

export function byWeek(week) {
  return function ({ date: dateString }) {
    const dateWeek = getCalendarWeek(new Date(dateString));
    return dateWeek === week;
  };
}

export function sortByDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}
