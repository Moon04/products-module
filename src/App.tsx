import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Grommet theme={theme}>
        <AppBar>
          <Heading level="3" margin="none">
            My Products
          </Heading>
          <Button
            title={"Add Product"}
            icon={<Add color="#ffffff" />}
            href={"/add-product"}
          />
        </AppBar>
        <Routes>
          {/* <Route exact={true} path="/" component={Home} /> TODO: ADD Home COMPONENT */}
          {/* <Route exact={true} path="/add-product" component={ProductForm} /> TODO: ADD ProductForm COMPONENT */}
        </Routes>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
