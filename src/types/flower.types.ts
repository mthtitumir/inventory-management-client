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