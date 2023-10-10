import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import "./App.css";
import MainAppBar from "./components/MainAppBar";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#030014",
    },
    secondary: purple,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <MainAppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
