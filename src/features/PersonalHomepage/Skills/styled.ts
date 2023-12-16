import styled from "styled-components";

export const Section = styled.section`
  margin: 72px 0;
  padding: 32px;
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: ${({ theme }) => theme.color.tileShadow};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 72px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 48px 16px;
    padding: 16px;
  }
`;

export const ImageIcon = styled.img`
  width: 26px;
  height: 32px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 17px;
    height: 21px;
  }
`;

export const SkillsList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    letter-spacing: 0.7px;
  }
`;

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.bullet};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 6px;
    height: 6px;
  }
`;
