import { Container, Typography } from '@mui/material';
import Impact from './Impact';

const About = () => {
  return (
    <Container component="section" id="about-us">
      <Typography variant="h1">About Us</Typography>

      <Typography paragraph>
        Girls Code Lincoln is a 501(c)(3) nonprofit organization. We strive to
        ignite passion for technology and leadership in young girls with the
        long-term goal of closing the gender gap in S.T.E.M.
      </Typography>

      <Typography paragraph>
        We host multiweek technology clubs for 4th-9th grade girls. All clubs
        are completely free and 100% volunteer-run.
      </Typography>

      <Typography paragraph>
        We partner with Nebraska organizations and build in-house curriculum to
        teach technology, leadership, and life skills.
      </Typography>

      <Impact />
    </Container>
  );
};

export default About;
