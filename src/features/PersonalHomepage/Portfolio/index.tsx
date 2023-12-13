import { useFetchRepos } from "../../useFetchRepos";
import { SubText } from "../SubText";
import { Title } from "../Title";
import Error from "./Error";
import Loading from "./Loading";
import Repos from "./Repos";
import { Icon, Section, Wrapper } from "./styled";

const Portfolio = () => {
  const { data, isLoading, error } = useFetchRepos();
  return (
    <Section>
      <Wrapper>
        <Icon />
        <Title>Portfolio</Title>
        <SubText>My recent projects</SubText>
      </Wrapper>

      {isLoading && <Loading />}
      {error && <Error />}
      {data && <Repos />}

      {/* {error && <p>error</p>}
      {isLoading && <p>Loading...</p>}
      {data && data.map(el => <div key={el.id}>{el.name}</div>)} */}
    </Section>
  );
};

export default Portfolio;
