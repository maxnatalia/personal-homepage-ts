import { RepoType } from "../useFetchRepos";
import {
  Box,
  Content,
  Description,
  Link,
  Name,
  Tag,
  TagsBox,
  Tile,
  Wrapper,
} from "./styled";

type ReposProps = {
  data: RepoType[];
};

const Repos = ({ data }: ReposProps) => {
  return (
    <Wrapper>
      {data.map(
        repo =>
          repo.name !== "maxnatalia" && (
            <Tile key={repo.id}>
              <Name>{repo.name.toUpperCase().replace(/-/g, " ")}</Name>
              <Description>
                {repo.description
                  ? repo.description
                  : "Description of the project coming soon... "}
              </Description>
              <>
                {repo.homepage && (
                  <Box>
                    <Content>Demo:</Content>
                    <span>
                      <Link
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.homepage.slice(8)}
                      </Link>
                    </span>
                  </Box>
                )}
                <Box>
                  <Content>Code:</Content>
                  <span>
                    <Link href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.html_url.slice(8)}
                    </Link>
                  </span>
                </Box>
              </>
              <TagsBox>
                {repo.topics.map((topic, index) => (
                  <Tag key={`${topic} - ${index}`}>{topic}</Tag>
                ))}
              </TagsBox>
            </Tile>
          )
      )}
    </Wrapper>
  );
};

export default Repos;
