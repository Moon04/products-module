export const theme = {
  global: {
    colors: {
      brand: "#45b467",
      text: "#ffffff",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  formField: {
    border: false,
  },
  textInput: {
    extend: () => `
      font-weight: 400;
    `,
  },
  checkBox: {
    extend: () => `
      width: 100%;
      margin: 10px 0
    `,
  },
};
