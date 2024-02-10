import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="products.id"
          reference="Product"
          label="products"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
