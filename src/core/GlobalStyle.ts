import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
};

*, ::after, ::before {
  box-sizing: inherit;
};

body {
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.9px;
  line-height: 140%;
  font-family: 'Inter', sans-serif;
  word-break: break-word;
  background: ${({ theme }) => theme.color.background};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      font-size: 14px;
  }
}
`;
