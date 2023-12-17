import styled from "styled-components";

export const SubText = styled.span`
  font-size: 20px;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
  }
`;
