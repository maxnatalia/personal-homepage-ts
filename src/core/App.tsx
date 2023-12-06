import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";
import useThemeContext from "../common/ThemeSwitcher/useThemeContext";
import PersonalHomepage from "../features/PersonalHomepage";

const App = () => {
  const { isDarkTheme } = useThemeContext();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        // cacheTime: 1000 * 60 * 60,
        // keepPreviousData: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <GlobalStyle />
        <Normalize />
        <PersonalHomepage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
