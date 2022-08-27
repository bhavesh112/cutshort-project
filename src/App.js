import OnboardingForm from "./components/OnboardingForm/OnboardingForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <OnboardingForm />
      </ThemeProvider>
    </>
  );
}

export default App;
