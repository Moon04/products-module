import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button, Heading, Grommet } from "grommet";
import { Add } from "grommet-icons";

import ProductForm from "./pages/ProductForm";

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
          <Route caseSensitive path="/add-product" element={<ProductForm />} />
        </Routes>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
