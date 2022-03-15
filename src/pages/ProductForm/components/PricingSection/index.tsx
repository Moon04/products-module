import React from "react";
import { Box, Heading, Grid, CheckBox, Text } from "grommet";

import { TextInputGroup } from "../../../../components";

type Props = {
  price: number;
  compareAt: number;
  costPerItem: number;
  isTaxCharged: boolean;
  onChange: (e: any) => void;
};

const pricePattern = /^((\d+(\.\d*)?)|(\.\d+))$/;

const PricingSection = ({
  price,
  compareAt,
  costPerItem,
  isTaxCharged,
  onChange,
}: Props) => {
  return (
    <Box align={"center"} pad={"large"}>
      <Heading alignSelf={"start"} level={4}>
        Pricing
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
            id={"price"}
            label={"Price"}
            pattern={pricePattern}
            value={price}
            onChange={onChange}
          />
          <TextInputGroup
            id={"compareAt"}
            label={"Compare at price"}
            pattern={pricePattern}
            value={compareAt}
            onChange={onChange}
          />
        </Grid>
      </Box>
      <Box width={"100%"} pad={"medium"}>
        <Grid
          columns={{
            count: 2,
            size: "auto",
          }}
          gap="medium"
          width={"100%"}
        >
          <Box>
            <TextInputGroup
              id={"costPerItem"}
              label={"Cost per item"}
              pattern={pricePattern}
              value={costPerItem}
              onChange={onChange}
            />
            <Text>{"Customers won't see this"}</Text>
          </Box>
          <Grid
            alignContent={"around"}
            columns={{
              count: 2,
              size: "auto",
            }}
            gap="medium"
            width={"100%"}
          >
            <Box>
              <Text>Margin</Text>
              <Text>
                {costPerItem
                  ? `${((price - costPerItem) / price) * 100}%`
                  : "-"}
              </Text>
            </Box>
            <Box>
              <Text>Profit</Text>
              <Text>{costPerItem ? `EGB ${price - costPerItem}` : "-"}</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CheckBox
        id={"isTaxCharged"}
        checked={isTaxCharged}
        label={"Charge tax on this product"}
        onChange={onChange}
      />
    </Box>
  );
};

export default PricingSection;
