import About from './Domains/About';
import ClubsOverview from './Domains/JoinClubs/ClubsOverview';
import ContactForm from './Domains/Home/ContactForm';
import Footer from './Components/Footer';
import GetInvolved from './Domains/GetInvolved/GetInvolved';
import HeroHeader from './Domains/Home/HeroHeader';
import ImageGallery from './Domains/Home/ImageGallery';
import Navbar from './Components/Navbar';
import Podcast from './Domains/Home/Podcast';
import SponsorsAndPartners from './Domains/Home/SponsorsAndPartners';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="container-fluid">
          <Navbar />

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

          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
