export const formatCurrency = (value: number) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };

  if (!value) {
    return new Intl.NumberFormat("pt-BR", options).format(0);
  }

  return new Intl.NumberFormat("pt-BR", options).format(value);
};
