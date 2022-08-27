import { createTheme } from "@mui/material";
import "@fontsource/inter";
const theme = createTheme({
  palette: {
    primary: {
      main: "#664DE5",
    },
    text: {
      primary: "#151B28",
      secondary: "#A7B1C4",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h4: {
      fontSize: "1.8rem",
    },
    h5: {
      fontSize: "1.6rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "56px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default theme;
