import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  products?: Product | null;
  updatedAt: Date;
};
