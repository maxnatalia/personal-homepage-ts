import styled from "styled-components";

export const Section = styled.section`
  margin: 72px 0;
  padding: 32px;
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: ${({ theme }) => theme.shadows.primary};
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
