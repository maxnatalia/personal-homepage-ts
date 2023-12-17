import { SubText } from "../../SubText";
import { Loader, Wrapper } from "./styled";

const Loading = () => {
  return (
    <Wrapper>
      <SubText>Please wait, projects are being loaded...</SubText>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
