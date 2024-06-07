export function formatDate(
  isoDateString: string,
  type: 'Date' | 'DateTime'
): string {
  const date = new Date(isoDateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  if (type === 'DateTime') {
    return `${day}/${month}/${year} às ${hours}:${minutes}h`;
  } else {
    return `${day}/${month}/${year}`;
  }
}
