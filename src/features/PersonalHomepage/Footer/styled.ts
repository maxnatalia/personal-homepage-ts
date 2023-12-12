import styled, { css } from "styled-components";

type StyledLinkProps = {
  $email?: boolean;
};

export const StyledFooter = styled.footer`
  margin-bottom: 108px;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition: color 0.3s ease-in;

  ${({ $email }) =>
    $email &&
    css`
      text-decoration: none;
      font-weight: 900;
      font-size: 32px;
    `}

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const LogoBox = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
`;
