import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryCreateInput = {
  name: string;
  products: ProductWhereUniqueInput | null;
};
