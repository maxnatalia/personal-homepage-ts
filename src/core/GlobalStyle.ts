import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
};

*, ::after, ::before {
  box-sizing: inherit;
};

body {
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.9px;
  line-height: 140%;
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.color.background};
  transition: all 0.3s ease;
}
`;