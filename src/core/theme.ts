import { DefaultTheme } from "styled-components";

const colorNames = {
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
  lightGrey: "#E5E5E5",
  slateGrey: "#6E7E91",
  iron: "#D1D5DA4D",
  semiBlack: "#252525",
  semiDark: "#363636B8",
  scienceBlue: "#0366D6",
  scienceBlueLight: "#0366d672",
  scienceBlue20: "#0366D633",
  scienceBlue50: "#0366D680",
  dogerBlue: "#2188FF",
  dogerBlueDark: "#2188ff46",
};

const shadows = {
  primary:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",

  focusLight:
    "-2px -2px 0px 0px #8CC2FF, 2px 2px 0px 0px #8CC2FF, -2px 2px 0px 0px #8CC2FF, 2px -2px 0px 0px #8CC2FF",
  focusDark:
    "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE",
  selected: "0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset",
};

const breakpoint = {
  mobile: 767,
  tablet: 991,
};

export const themeLight: DefaultTheme = {
  breakpoint,
  color: {
    background: colorNames.whiteLilac,
    textPrimary: colorNames.semiBlack,
    textSecondary: colorNames.slateGrey,
    bullet: colorNames.scienceBlue,
    sectionBackground: colorNames.white,
    divider: colorNames.lightGrey,
    themeBox: colorNames.lightGrey,
    switchIcon: colorNames.white,
    buttonBg: colorNames.scienceBlue,
    buttonText: colorNames.white,
    buttonBorder: colorNames.iron,
    buttonHover: shadows.focusLight,
    buttonActive: shadows.selected,
    primary: colorNames.scienceBlue,
    tileBg: colorNames.white,
    tileShadow: shadows.primary,
    tileBorderPrimary: colorNames.iron,
    tileBorderSecondary: colorNames.scienceBlue20,
    tileName: colorNames.scienceBlue,
    line: colorNames.scienceBlueLight,
  },
};

export const themeDark: DefaultTheme = {
  breakpoint,
  color: {
    background: colorNames.semiBlack,
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    bullet: colorNames.dogerBlue,
    sectionBackground: colorNames.semiDark,
    divider: colorNames.lightGrey,
    themeBox: colorNames.semiDark,
    switchIcon: colorNames.semiBlack,
    buttonBg: colorNames.dogerBlue,
    buttonText: colorNames.white,
    buttonBorder: colorNames.iron,
    buttonHover: shadows.focusDark,
    buttonActive: shadows.selected,
    primary: colorNames.dogerBlue,
    tileBg: colorNames.semiDark,
    tileShadow: shadows.primary,
    tileBorderPrimary: colorNames.iron,
    tileBorderSecondary: colorNames.scienceBlue50,
    tileName: colorNames.white,
    line: colorNames.dogerBlueDark,
  },
};
