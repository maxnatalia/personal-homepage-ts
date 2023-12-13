import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import { Container } from "./styled";

const PersonalHomepage = () => {
  return (
    <Container>
      <Header />
      <Skills />
      <Portfolio />
      <Footer />
    </Container>
  );
};

export default PersonalHomepage;
