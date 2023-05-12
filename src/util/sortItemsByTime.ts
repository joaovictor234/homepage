export const sortItems = (a: Date, b: Date): number => {
  const dateA = a.getTime();
  const dateB = b.getTime();
  return dateA < dateB ? 1 : -1;
}