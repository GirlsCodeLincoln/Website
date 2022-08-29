import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Domains/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Domains/About';
import GetInvolved from './Domains/GetInvolved';
import JoinClubs from './Domains/JoinClubs';
import ErrorPage from './Components/ErrorPage';
import ContactForm from './Domains/Contact';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-clubs" element={<JoinClubs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
