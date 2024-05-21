import { Dayjs } from "dayjs"
import React from "react";

export type TDiscount = {
  _id: string;
  code: string;
  type: string;
  startDate: string | Dayjs;
  endDate: string | Dayjs;
  startTime: string | Dayjs;
  endTime: string | Dayjs;
  percentOff: number;
  amountOff: number;
  minOrderValue: number;
  minOrderQuantity: number;
  valid: boolean;
  limitPerCustomer: number;
}

export type TAddUpdateDiscount = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  id: string | undefined,
  type: "add" | "update"
}
