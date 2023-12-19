import styled, { css } from "styled-components";
import GitHubLogo from "./gitHub.svg?react";
import LinkedInLogo from "./linkedIn.svg?react";

type StyledLinkProps = {
  $email?: boolean;
};

export const StyledFooter = styled.footer`
  padding: 0 16px;
  margin-bottom: 108px;
  max-width: 670px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: 30px;
    gap: 12px;
  }
`;

export const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ theme }) => theme.color.textPrimary};
  cursor: pointer;
  transition: color 0.3s ease-in;

  ${({ $email }) =>
    $email &&
    css`
      text-decoration: none;
      font-weight: 900;
      font-size: 32px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 17px;
      }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 28px;
    gap: 16px;
  }
`;

const iconStyles = css`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const GithubIcon = styled(GitHubLogo)`
  ${iconStyles}
`;

export const LinkedInIcon = styled(LinkedInLogo)`
  ${iconStyles}
`;
