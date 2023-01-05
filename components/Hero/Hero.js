import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        A computer enthusiast who likes to solve real-world problems. Likes to
        code anytime. Interested in developing web apps and learning algorithms.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1xrciv3QuSUn6RBZWPcDKnuDZ1n42OWU8/view?usp=share_link")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
