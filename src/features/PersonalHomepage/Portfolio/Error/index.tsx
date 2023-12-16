import { gitHubLink } from "../../../utils";
import { Button } from "../../Button";
import { SubText } from "../../SubText";
import { Icon, Subtitle, Wrapper } from "./styled";

const Error = () => {
  return (
    <Wrapper>
      <Icon />
      <Subtitle>Ooops! Something went wrong... </Subtitle>
      <SubText>Sorry, failed to load Github projects.</SubText>
      <SubText>You can check them directly on Github.</SubText>
      <Button
        title={gitHubLink}
        href={gitHubLink}
        target="_blank"
        rel="noreferrer"
      >
        Go to Github
      </Button>
    </Wrapper>
  );
};

export default Error;
