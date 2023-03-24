export const getTime = (date: Date) => {
  return `${date.toLocaleDateString('pt-BR')} ${date.getHours()}:${date.getMinutes()}`;
}