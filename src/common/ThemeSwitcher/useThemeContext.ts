import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === null) {
    throw new Error("Something went wrong!");
  }

  return themeContext;
};

export default useThemeContext;
