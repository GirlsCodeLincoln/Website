import About from "./Containers/About";
import ClubsOverview from "./Containers/ClubsOverview";
import ContactForm from "./Containers/ContactForm";
import Footer from "./Containers/Footer";
import GetInvolved from "./Containers/GetInvolved";
import HeroHeader from "./Containers/HeroHeader";
import ImageGallery from "./Containers/ImageGallery";
import Navbar from "./Containers/Navbar";
import Podcast from "./Containers/Podcast";
import SponsorsAndPartners from "./Containers/SponsorsAndPartners";

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
