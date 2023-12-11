import ThemeSwitcher from "../../../common/ThemeSwitcher";
import { email } from "../../utils";
import { Button } from "../Button";
import { SpecialText } from "../SpecialText";
import EnvelopeIcon from "./message.svg?react";
import avatar from "./avatar.jpg";
import { Description, Image, Name, StyledHeader, ThemeBox } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Image src={avatar} alt="Natalia Mazur-Żurek image" />
      <div>
        <SpecialText>this is</SpecialText>
        <Name>Natalia Mazur-Żurek</Name>
        <Description>
          👩‍🦰💻I’m an enthusiastic Frontend Developer in friendship with React,
          currently looking for new job opportunities and challenges.
        </Description>
        <Button as="a" title={email} href={`mailto:${email}`}>
          <EnvelopeIcon />
          hire me
        </Button>
      </div>
      <ThemeBox>
        <ThemeSwitcher />
      </ThemeBox>
    </StyledHeader>
  );
};

export default Header;
