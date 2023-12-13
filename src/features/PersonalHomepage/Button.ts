import styled from "styled-components";

export const Button = styled.a`
  margin-top: 32px;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.color.buttonBg};
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.color.buttonActive};
  }
`;
