export type TDiscount = {
    _id: string
    code: string
    type: string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    percentOff: number
    amountOff: number
    minOrderValue: number
    valid: boolean
    limitPerCustomer: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  