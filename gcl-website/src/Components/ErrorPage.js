import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';

const ErrorPage = () => {
  return (
    <Box component="main">
      <Header>
        <Typography variant="h1">Oops!</Typography>
      </Header>

      <Container align="center">
        <Typography paragraph>
          Sorry, we can't find that page. Please try going back, or you can
          navigate back to the home page.
        </Typography>

        <Button component={Link} to="/" variant="contained" color="secondary">
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;
