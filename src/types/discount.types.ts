import { Dayjs } from "dayjs"

export type TDiscount = {
    _id: string
    code: string
    type: string
    startDate: string | Dayjs
    endDate: string
    startTime: string | Dayjs
    endTime: string | Dayjs
    percentOff: number
    amountOff: number
    minOrderValue: number
    valid: boolean
    limitPerCustomer: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  