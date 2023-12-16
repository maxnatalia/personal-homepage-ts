import styled from "styled-components";
import DangerIcon from "./danger.svg?react";

export const Wrapper = styled.div`
  padding-top: 88px;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-top: 44px;
    padding-bottom: 34px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
  }
`;

export const Icon = styled(DangerIcon)`
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Subtitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;
