import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colours: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
