export type TCart = {
  _id: string;
  salesPerson: string;
  company: string;
  buyer: string;
  items: Item[] | [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Item = {
  product: string;
  quantity: number;
  _id: string;
};
