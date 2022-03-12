import React from "react";
import { Box, Button, Heading, Grommet } from "grommet";
import { Add } from "grommet-icons";

import { theme } from "./theme";

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level="3" margin="none">
          My Products
        </Heading>
        <Button
          title={"Add Product"}
          icon={<Add color="#ffffff" />}
          onClick={() => {
            // TODO: redirect to product form
          }}
        />
      </AppBar>
    </Grommet>
  );
}

export default App;
