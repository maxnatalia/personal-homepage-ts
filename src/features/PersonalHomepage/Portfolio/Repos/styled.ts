import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 16px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 56px;
  background-color: ${({ theme }) => theme.color.tileBg};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.tileBorderPrimary};
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.tileBorderSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 24px;
  }
`;

export const Name = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.tileName};
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    letter-spacing: 0.7px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.span`
  min-width: 60px;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    min-width: 48px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  padding-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const TagsBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  gap: 8px;
`;

export const Tag = styled.div`
  font-size: 14px;
  letter-spacing: 1.4px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.color.tileBorderSecondary};
  box-shadow: ${({ theme }) => theme.color.tileShadow};
`;
