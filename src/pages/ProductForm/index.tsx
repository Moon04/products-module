import React, { useState } from "react";
import { Box, Button, Form } from "grommet";

import DescriptionSection from "./components/DescriptionSection";
import InventorySection from "./components/InventorySection";
import PricingSection from "./components/PricingSection";
import MediaSection from "./components/MediaSection";

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
    mediaFiles: null as any,
  });

  const onChange = (e: any) => {
    const { id, value, checked } = e.target;
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

  const onMediaUpload = (filesData: any[]) => {
    const files = filesData.map((fileData) => fileData.file);
    setProduct({ ...product, mediaFiles: files });
  };

  return (
    <Form
      validate="change"
      onSubmit={({ value }) => console.log("Submit", value)}
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

      <MediaSection onMediaUpload={onMediaUpload} />

      <Box>
        <Button alignSelf="center" primary label="Add Product" />
      </Box>
    </Form>
  );
};

export default ProductForm;
