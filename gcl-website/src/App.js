import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './Domains/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="container-fluid">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
