export const convertMoneyToBRL = (value: number):string => {
  return Intl
    .NumberFormat('pt-BR', {minimumFractionDigits: 2})
    .format(value)
}