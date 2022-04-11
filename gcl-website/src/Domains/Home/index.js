import About from '../About';
import GetInvolved from '../GetInvolved';
import ClubsOverview from '../JoinClubs/ClubsOverview';
import ContactForm from './ContactForm';
import HeroHeader from './HeroHeader';
import ImageGallery from './ImageGallery';
import Podcast from './Podcast';
import SponsorsAndPartners from './SponsorsAndPartners';

const Home = () => {
  return (
    <main className="row">
      <HeroHeader />

      <About />
      <GetInvolved />
      <Podcast />

      <ImageGallery />
      <ClubsOverview />

      <SponsorsAndPartners />

      <ContactForm />
    </main>
  );
};

export default Home;
