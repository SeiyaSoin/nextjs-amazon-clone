import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryUpdateInput = {
  name?: string;
  products?: ProductWhereUniqueInput | null;
};
