export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function prettifyDate(date) {
  date = date instanceof Date ? date : new Date(date);
  return date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function toISO8601Date(date) {
  return new Date(date).toISOString().split("T")[0];
}
