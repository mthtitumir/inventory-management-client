export type TTradingPartner = {
    _id: string
    name: string
    email: string
    phoneNumber: string
    partnerOf: string
    jobTitle: string
    website: string
    note: string
    address: string
    city: string
    province: string
    zip: string
    country: string
    discountUsed: Array<string>
    coinsEarned: number
    __v: number
  }