import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductWhereUniqueInput;
};
