import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A4BED',
      dark: '#2a29b4',
    },
    secondary: {
      main: '#D895CA',
    },
    background: {
      default: '#EEF1F6',
    },
  },

  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    h1: { fontSize: '3.052rem', fontWeight: 700 },
    h2: {
      fontSize: '2.441rem',
      fontWeight: 500,
      marginTop: '1em',
      marginBottom: '0.5em',
    },
    h3: {
      fontSize: '1.953rem',
      fontWeight: 500,
      marginTop: '1em',
      marginBottom: '0.5em',
    },
    h4: {
      fontSize: '1.563rem',
      fontWeight: 600,
      marginTop: '1em',
      marginBottom: '0.5em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      marginTop: '1em',
      marginBottom: '0.5em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginTop: '1em',
      marginBottom: '0.5em',
    },
    button: {
      letterSpacing: 0,
      textTransform: 'capitalize',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: '0.5em',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        sx: {
          p: { xs: 5 },
        },
      },
    },
  },
});

export default theme;
