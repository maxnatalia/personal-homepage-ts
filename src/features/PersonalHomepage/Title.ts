import styled, { css } from "styled-components";

type TitleProps = {
  $skills?: boolean;
};

export const Title = styled.h2<TitleProps>`
  margin-top: 12px;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  font-size: 30px;
  font-weight: 900;

  ${({ $skills }) =>
    $skills &&
    css`
      display: flex;
      align-items: center;
      margin-top: 0;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.divider};

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-bottom: 12px;
        padding-bottom: 12px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;
