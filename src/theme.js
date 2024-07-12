import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    typography: {
      color: "white",
    },
    primary: {
      main: "#6C63FF",
    },
    background: {
      default: "#252525",
    },
  },
});

export const defaultTheme = createTheme({});
