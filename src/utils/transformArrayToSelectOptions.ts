import { TTradingPartner } from "../types";

export const transformedArrayToSelectOptions = (inputArray: Partial<TTradingPartner>[]) => {
  return inputArray?.map((item) => ({
    label: `${item.name} (${item.email})`,
    value: item._id,
  }));
};
