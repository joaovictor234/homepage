import { verifyValueGreaterThan10 } from "./convertData";

export const getTime = (date: Date) => {
  return `${date.toLocaleDateString('pt-BR')} ${verifyValueGreaterThan10(date.getHours())}:${verifyValueGreaterThan10(date.getMinutes())}`;
}