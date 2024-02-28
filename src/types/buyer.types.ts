export type TBuyer = {
    _id: string
    name: string
    email: string
    phoneNumber: string
    customerOf: string
    jobTitle: string
    website: string
    note: string
    address: string
    city: string
    state: string
    postalCode: string
    country: string
    discountUsed: Array<string>
    coinsEarned: number
    __v: number
  }