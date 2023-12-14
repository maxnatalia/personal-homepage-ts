import "styled-components";

type BreakpointsType = {
  mobile: number;
  tablet: number;
};

type ColorsType = {
  background: string;
  textPrimary: string;
  textSecondary: string;
  bullet: string;
  sectionBackground: string;
  divider: string;
  themeBox: string;
  switchIcon: string;
  buttonBg: string;
  buttonText: string;
  buttonBorder: string;
  buttonHover: string;
  buttonActive: string;
  primary: string;
  tileBg: string;
  tileShadow: string;
  tileBorderPrimary: string;
  tileBorderSecondary: string;
  tileName: string;
  line: string;
};

declare module "styled-components" {
  export type DefaultTheme = {
    breakpoint: BreakpointsType;
    color: ColorsType;
  };
}
