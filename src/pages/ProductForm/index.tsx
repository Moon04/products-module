import React, { useState } from "react";
import { Form } from "grommet";

import DescriptionSection from "./components/DescriptionSection";
import InventorySection from "./components/InventorySection";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    sku: "",
    barcode: "",
    isQuantityTracked: false,
    isSoldOutOpenToSell: false,
    quantity: 0,
  });
  // const [valid, setValid] = useState(false);

  const onChange = (e: any) => {
    const { id, value, checked } = e.target;
    console.log(id, value, checked);
    if (["isQuantityTracked", "isSoldOutOpenToSell"].includes(id)) {
      setProduct({ ...product, [id]: checked });
    } else {
      setProduct({ ...product, [id]: value });
    }
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

      <InventorySection
        sku={product.sku}
        barcode={product.barcode}
        isQuantityTracked={product.isQuantityTracked}
        isSoldOutOpenToSell={product.isSoldOutOpenToSell}
        quantity={product.quantity}
        onChange={onChange}
      />

      {/* TODO: Add Media Section */}
      {/* TODO: Add Pricing Section */}
    </Form>
  );
};

export default ProductForm;
