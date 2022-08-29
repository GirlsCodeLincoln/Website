import { Box, Container, Typography } from '@mui/material';
import HeroHeader from './HeroHeader';
import ImageGallery from './ImageGallery';
import Impact from './Impact';
import Podcast from './Podcast';
import SponsorsAndPartners from './SponsorsAndPartners';

const Home = () => {
  return (
    <Box component="main">
      <HeroHeader />

      <Container component="section" id="about-us" align="center">
        <Typography paragraph>
          Girls Code Lincoln is a 501(c)(3) nonprofit organization. We strive to
          ignite passion for technology and leadership in young girls with the
          long-term goal of closing the gender gap in STEM.
        </Typography>

        <Typography paragraph>
          We host multiweek technology clubs for 4th-9th grade girls. All clubs
          are completely free and 100% volunteer-run.
        </Typography>

        <Typography paragraph>
          We partner with Nebraska organizations and build in-house curriculum
          to teach technology, leadership, and life skills.
        </Typography>

        <Impact />
      </Container>

      <Podcast />
      <ImageGallery />
      <SponsorsAndPartners />
    </Box>
  );
};

export default Home;
