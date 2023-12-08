import styled, { css } from "styled-components";
import SunIcon from "./sunIcon.svg?react";

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ThemeText = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const ThemeBox = styled.div`
  border-radius: 20px;
  width: 48px;
  height: 26px;
  background: ${({ theme }) => theme.color.themeBox};
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;

export const ThemeSwitch = styled.div<{
  $moveToRight: boolean;
}>`
  margin: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.textSecondary};
  transition: transform 0.5s ease;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.color.switchIcon};
`;
