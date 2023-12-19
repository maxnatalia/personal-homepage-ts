import styled from "styled-components";
import Envelope from "./message.svg?react";

export const StyledHeader = styled.header`
  margin-top: 116px;
  display: flex;
  align-items: center;
  gap: 66px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 0 16px;
    margin-top: 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 32px;
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }
`;

export const Image = styled.img`
  padding-left: 16px;
  width: 398px;
  height: 398px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-left: 0;
    width: 240px;
    height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 132px;
    height: 132px;
  }
`;

export const Name = styled.h1`
  margin-top: 12px;
  margin-bottom: 36px;
  font-size: 38px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 1.9px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 1.1px;
  }
`;

export const Description = styled.p`
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    letter-spacing: 0.85px;
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 20px;
    height: 20px;
  }
`;

export const ThemeBox = styled.div`
  position: absolute;
  top: -12px;
  right: 16px;
`;
