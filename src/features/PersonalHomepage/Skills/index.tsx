import { skillsData } from "./skillsData";
import { Bullet, Section, SkillItem, SkillsList, Title } from "./styled";

type SkillsListType = {
  title: string;
  icon: string;
  list: string[];
};

const Skills = () => {
  return (
    <>
      {skillsData.map(({ title, icon, list }: SkillsListType, index) => (
        <Section key={`${index} - ${title}`}>
          <Title>
            {title} <img src={icon} alt={"icon"} />
          </Title>
          <SkillsList>
            {list.map((skill, index) => (
              <SkillItem key={`${index} - ${skill}`}>
                <Bullet />
                {skill}
              </SkillItem>
            ))}
          </SkillsList>
        </Section>
      ))}
    </>
  );
};

export default Skills;
