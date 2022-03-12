import React, { useState } from "react";
import { Form } from "grommet";

import DescriptionSection from "./components/DescriptionSection";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
  });
  // const [valid, setValid] = useState(false);

  const onChange = (e: any) => {
    const { id, value } = e.target;
    setProduct({ ...product, [id]: value });
  };

  const onDescChange = (desc: string) => {
    setProduct({ ...product, desc });
  };

  return (
    <Form
      validate="change"
      onSubmit={({ value }) => console.log("Submit", value)}
      // onValidate={(validationResults) => {
      //   console.log("validationResults = ", validationResults);
      //   setValid(validationResults.valid);
      // }}
    >
      <DescriptionSection
        title={product.title}
        desc={product.desc}
        onChange={onChange}
        onDescChange={onDescChange}
      />

      {/* TODO: Add Media Section */}
      {/* TODO: Add Inventory Section */}
      {/* TODO: Add Pricing Section */}
    </Form>
  );
};

export default ProductForm;
