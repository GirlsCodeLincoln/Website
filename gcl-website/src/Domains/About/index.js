import { Box, Container, Typography } from '@mui/material';
import Header from '../../Components/Header';
import Board from './Board';
import LeadershipTeam from './LeadershipTeam';

const About = () => {
  return (
    <Box component="section">
      <Header>
        <Typography variant="h1" textAlign="center">
          About Us
        </Typography>
      </Header>

      <Container>
        <Typography paragraph>
          Girls Code Lincoln is a 501(c)(3) nonprofit organization. We strive to
          ignite passion for technology and leadership in young girls with the
          long-term goal of closing the gender gap in STEM.
        </Typography>

        <Typography paragraph>
          We host multiweek technology clubs for 4th through 9th grade girls.
          All clubs are completely free and 100% volunteer-run.
        </Typography>

        <Typography paragraph>
          We partner with Nebraska organizations and build in-house curriculum
          to teach technology, leadership, and life skills.
        </Typography>

        <LeadershipTeam />

        <Board />
      </Container>
    </Box>
  );
};

export default About;
