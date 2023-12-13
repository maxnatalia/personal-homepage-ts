import styled from "styled-components";
import GitHubIcon from "./gitHub.svg?react";

export const Section = styled.section`
  margin: 72px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(GitHubIcon)`
  color: ${({ theme }) => theme.color.primary};
`;
