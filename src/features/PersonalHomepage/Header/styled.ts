import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-top: 116px;
  display: flex;
  gap: 66px;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.h1`
  margin-top: 12px;
  margin-bottom: 36px;
  font-size: 38px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 1.9px;
`;

export const Description = styled.p`
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const ThemeBox = styled.div`
  position: absolute;
  top: -12px;
  right: 0;
`;
