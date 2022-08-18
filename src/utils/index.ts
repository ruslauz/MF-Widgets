export function formatDate(
  value?: number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  return new Intl.DateTimeFormat("en", options).format(value);
}
