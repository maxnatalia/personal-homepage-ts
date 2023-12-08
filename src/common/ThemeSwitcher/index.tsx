import {
  ThemeContainer,
  ThemeText,
  ThemeBox,
  ThemeSwitch,
  Icon,
} from "./styled";
import useThemeContext from "./useThemeContext";

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <ThemeContainer>
      <ThemeText>dark mode {`${isDarkTheme ? "on" : "off"} `}</ThemeText>
      <ThemeBox
        onClick={toggleTheme}
        title={`${
          isDarkTheme ? "Change theme to light" : "Change theme to dark"
        }`}
      >
        <ThemeSwitch $moveToRight={isDarkTheme}>
          <Icon />
        </ThemeSwitch>
      </ThemeBox>
    </ThemeContainer>
  );
};

export default ThemeSwitcher;
