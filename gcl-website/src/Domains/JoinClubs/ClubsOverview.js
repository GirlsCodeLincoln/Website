import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Typography,
  Toolbar,
  useTheme,
  Link,
} from '@mui/material';
import clubsBackgroundImg from '../../Assets/clubs-background.jpg';
import studentBackgroundImg from '../../Assets/student-background.jpg';

const ClubsOverview = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.primary,
        background: `linear-gradient(180deg, rgba(242, 175, 228, 1), rgba(242, 175, 228, 0.9) 80%, rgba(242, 175, 228, 1)), url('${clubsBackgroundImg}')`,
        backgroundPosition: 'center right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          Applications for our fall clubs are currently closed. Applications
          will open again in the spring.
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingY: theme.spacing(8), textAlign: 'center' }}>
        <Typography variant="h2" sx={{ marginTop: 0 }}>
          Our Clubs
        </Typography>
        <Typography paragraph>
          Our clubs give girls interested in coding a gentle introduction to
          software, hardware, computer science fundamentals, and leadership
          through projects, activities, and community speakers.
        </Typography>
        <Typography paragraph>
          Girls Code Lincoln is a completely free of charge program designed for
          4th - 9th grade girls focusing on confidence, creativity and community
          through technology! Our programs run on Sunday afternoons from 1 - 4pm
          at FUSE Coworking in the Haymarket. Clubs are 2 hours long and are
          preceded by an hour long leadership workshop.
        </Typography>
        <Typography paragraph>
          If you'd like to learn more about our programming, or have any
          questions, feel free to email us at{' '}
          <Link href="mailto:info@girlscodelincoln.com">
            info@girlscodelincoln.com
          </Link>{' '}
          and someone will get back to you as soon as possible.
        </Typography>
        <Card sx={{ width: 300, margin: '20px auto' }}>
          <CardMedia
            component="img"
            height="200"
            image={studentBackgroundImg}
            alt="Students with their completion certificates"
          />
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" disabled>
              Applications are closed
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default ClubsOverview;
