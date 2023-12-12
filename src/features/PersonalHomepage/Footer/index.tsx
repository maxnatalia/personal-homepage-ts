import { email, gitHubLink, linkedInLink } from "../../utils";
import { SpecialText } from "../SpecialText";
import GitHubLogo from "./gitHub.svg?react";
import LinkedInLogo from "./linkedIn.svg?react";
import { LogoBox, StyledFooter, StyledLink } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <SpecialText>let's talk!</SpecialText>
      <StyledLink $email href={`mailto:${email}`}>
        {email}
      </StyledLink>
      <span>
        I'm looking forward to improving and learning new skills at FrontEnd.
        I’m always open to new projects whenever I have the time. If you want to
        give me a chance to demonstrate my knowledge and hire me, feel free to
        contact me by e-mail or other way. 👩‍💻
      </span>
      <LogoBox>
        <StyledLink
          title="GitHub"
          href={gitHubLink}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo />
        </StyledLink>
        <StyledLink
          title="LinkedIn"
          href={linkedInLink}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInLogo />
        </StyledLink>
      </LogoBox>
    </StyledFooter>
  );
};

export default Footer;
