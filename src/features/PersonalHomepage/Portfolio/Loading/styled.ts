import styled from "styled-components";
import LoaderIcon from "./loader.svg?react";

export const Wrapper = styled.div`
  padding-top: 88px;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-top: 44px;
    padding-bottom: 34px;
    padding-left: 16px;
    padding-right: 16px;
    gap: 24px;
  }
`;

export const Loader = styled(LoaderIcon)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 80px;
    height: 80px;
  }
`;
