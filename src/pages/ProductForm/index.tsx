import React, { useState } from "react";
import { Form } from "grommet";

import DescriptionSection from "./components/DescriptionSection";
import InventorySection from "./components/InventorySection";
import PricingSection from "./components/PricingSection";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    sku: "",
    barcode: "",
    isQuantityTracked: false,
    isSoldOutOpenToSell: false,
    quantity: 0,
    price: 0.0,
    compareAt: 0.0,
    costPerItem: 0.0,
    isTaxCharged: false,
  });
  // const [valid, setValid] = useState(false);

  const onChange = (e: any) => {
    const { id, value, checked } = e.target;
    console.log(id, value, checked);
    if (
      ["isQuantityTracked", "isSoldOutOpenToSell", "isTaxCharged"].includes(id)
    ) {
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

      <PricingSection
        price={product.price}
        compareAt={product.compareAt}
        costPerItem={product.costPerItem}
        isTaxCharged={product.isTaxCharged}
        onChange={onChange}
      />

      {/* TODO: Add Media Section */}
    </Form>
  );
};

export default ProductForm;
