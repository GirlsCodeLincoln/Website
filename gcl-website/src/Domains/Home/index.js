import { Box } from '@mui/material';
import About from '../About';
import GetInvolved from '../GetInvolved';
import JoinClubs from '../JoinClubs';
import ContactForm from './ContactForm';
import HeroHeader from './HeroHeader';
import ImageGallery from './ImageGallery';
import Podcast from './Podcast';
import SponsorsAndPartners from './SponsorsAndPartners';

const Home = () => {
  return (
    <Box component="main">
      <HeroHeader />

      <About />
      <GetInvolved />
      <Podcast />

      <ImageGallery />
      <JoinClubs />

      <SponsorsAndPartners />

      <ContactForm />
    </Box>
  );
};

export default Home;
