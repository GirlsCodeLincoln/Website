import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Domains/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
