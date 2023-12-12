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
      gap: 16px;
      margin-top: 0;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.divider};
    `}
`;
