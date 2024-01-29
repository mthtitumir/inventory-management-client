type TFlowerCategoryType =
  | "Alstromerias"
  | "Calla Lillies"
  | "Carnations"
  | "Disbud Chrysanthemums"
  | "Ecuador Roses"
  | "Follage"
  | "Gerbras"
  | "Malaysian Chrysanthemums"
  | "Spray Carnations"
  | "Spray Chrysanthemums"
  | "Super Premiums"
  | "Uncategorized"
  | "Intermediate Roses"
  | "Premium Roses"
  | "Sprays"
  | "Wholesale Mixes";
  
export type TFlower = {
  _id: string;
  seller: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  bloomDate?: Date;
  color: string;
  type?: TFlowerCategoryType;
  size: 's' | 'm' | 'l' | 'xl' | 'xxl';
  arrangement?: string;
  style?: string;
  fragrance:
    | 'rose'
    | 'neroli'
    | 'jasmine'
    | 'geranium'
    | 'lavender'
    | 'ylang-ylang'
    | 'lily of the valley'
    | 'violet and peony';
};

export type FlowerDefaultValuesProps = { _id?: string; seller?: string; name?: string; price?: number; quantity?: number; color?: string; bloomDate?: string | undefined; style: string; arrangement: string; type?: string; size?: string; fragrance?: string; image?: string }
