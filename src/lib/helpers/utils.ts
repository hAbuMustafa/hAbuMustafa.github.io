export function formatDate(locale: string, date: string) {
  return new Date(date).toLocaleDateString(locale, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZoneName: 'short',
  });
}
