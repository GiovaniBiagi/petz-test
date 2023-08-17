import { BASE_TAX_PERCENTAGE } from "@/constants/taxes.constants"

export const calculateTaxes = (price: number, multiplier: number) => {
  if (!price || !multiplier) {
    return null
  }

  const decimalPrice = price / 100;
  const taxValue = decimalPrice * (BASE_TAX_PERCENTAGE * multiplier);

  return taxValue

}
