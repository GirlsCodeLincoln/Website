import { Box, Container, useTheme } from '@mui/material';
import backgroundImg from '../Assets/background.jpg';

const Header = (props) => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: theme.palette.grey[900],
        backgroundImage: props.imageUrl || `url(${backgroundImg})`,
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          paddingY: theme.spacing(15),
          textAlign: 'center',
          color: theme.palette.getContrastText(theme.palette.grey[900]),
        }}
      >
        {props.children}
      </Container>
    </Box>
  );
};

export default Header;
