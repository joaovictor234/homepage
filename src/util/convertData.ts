export const verifyValueGreaterThan10 = (day: number) =>
  day >= 10 ? `${day}` : `0${day}`;

export const convertToBRLData = (data: Date) =>
  data ? data.toLocaleDateString('pt-BR') : '';

export const convertToAmericanData = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth()+1;
  const day = data.getDate();
  return [year, verifyValueGreaterThan10(month), verifyValueGreaterThan10(day)].join('-')
}

export const convertToEnUSDataWithHoursAndMinutes = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth()+1;
  const day = data.getDate();
  const hours = data.getHours();
  const minutes = data.getMinutes();

  const date = [year, verifyValueGreaterThan10(month), verifyValueGreaterThan10(day)].join('-');
  const time = [verifyValueGreaterThan10(hours), verifyValueGreaterThan10(minutes)].join(':');

  return [date, time].join(' ');
}