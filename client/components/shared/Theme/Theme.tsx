import { createMuiTheme } from "@material-ui/core";

export const MyTheme = {
  name: "Default",
  fonts: {
    primaryFont: ["Lato", "sans-serif"].join(","),
  },
  color: {
    white: "#ffffff",
    primary: "#003a8c",
    red: "#E8381B",
    dark: "#17232C",
    blue: "#1E93F5",
    gray: "rgba(0, 0, 0, 0.1)",
    black: "#000000",
    darkGray: "rgba(0, 0, 0, 0.5)",
  },
  spacing: {
    sectionMarginTop: "14rem",
  },
  gradient: {
    primary: "linear-gradient(90deg, #FF690F -0.56%, #E8381B 100%)",
  },
};

export const muiTheme = createMuiTheme();
