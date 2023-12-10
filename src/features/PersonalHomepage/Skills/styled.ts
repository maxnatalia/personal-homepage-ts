import styled from "styled-components";

export const Section = styled.section`
  margin: 36px 0;
  padding: 32px;
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: ${({ theme }) => theme.shadows.primary};
`;

export const Title = styled.h2`
  display: flex;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.divider};
  letter-spacing: 1.5px;
  font-size: 30px;
  font-weight: 900;
`;

export const SkillsList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.bullet};
`;
