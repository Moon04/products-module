import React from "react";
import { Box, Heading, Grid, CheckBox } from "grommet";

import { NumberInputGroup, TextInputGroup } from "../../../../components";

type Props = {
  sku: string;
  barcode: string;
  isQuantityTracked: boolean;
  isSoldOutOpenToSell: boolean;
  quantity: number;
  onChange: (e: any) => void;
};

const InventorySection = ({
  sku,
  barcode,
  isQuantityTracked,
  isSoldOutOpenToSell,
  quantity,
  onChange,
}: Props) => {
  return (
    <Box align={"center"} pad={"large"}>
      <Heading alignSelf={"start"} level={4}>
        Inventory
      </Heading>
      <Box width={"100%"} pad={"medium"} border={"bottom"}>
        <Grid
          columns={{
            count: 2,
            size: "auto",
          }}
          gap="medium"
          width={"100%"}
        >
          <TextInputGroup
            id={"sku"}
            label={"SKU (Stock Keeping Unit)"}
            value={sku}
            onChange={onChange}
          />
          <TextInputGroup
            id={"barcode"}
            label={"Barcode (ISBN, UPC, GTIN, etc.)"}
            value={barcode}
            onChange={onChange}
          />
        </Grid>
        <CheckBox
          id={"isQuantityTracked"}
          checked={isQuantityTracked}
          label={"Track quantity"}
          onChange={onChange}
        />
        <CheckBox
          id={"isSoldOutOpenToSell"}
          checked={isSoldOutOpenToSell}
          label={"Continue Selling when out of stock"}
          onChange={onChange}
        />
      </Box>
      <Box width={"100%"} pad={"medium"}>
        <Heading alignSelf={"start"} level={6}>
          Quantity
        </Heading>
        <NumberInputGroup
          id={"quantity"}
          label={"Available"}
          value={quantity}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default InventorySection;
