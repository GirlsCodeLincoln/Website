import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Header from '../../Components/Header';
import volunteerBackgroundImg from '../../Assets/volunteer-background.jpg';
import involvementBackgroundImg from '../../Assets/involvement-background.jpg';

const GetInvolved = () => {
  return (
    <Box component="main">
      <Header>
        <Typography variant="h1">Get Involved</Typography>
      </Header>

      <Box
        width="100%"
        sx={{
          background: `linear-gradient(rgba(242, 175, 228, 0.7), rgba(10, 75, 237, 0.9)), url('${involvementBackgroundImg}')`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <Typography variant="h2" align="center" marginTop={0}>
            Get Involved as a:
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            <Card sx={{ width: 300 }}>
              <CardMedia
                component="img"
                height="200"
                image={volunteerBackgroundImg}
                alt="Volunteers planning club logistics"
                sx={{ objectPosition: 'top' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ margin: 0 }}>
                  Volunteer
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://forms.gle/ZyN8V5PpJdSbzb139"
                  rel="noopener noreferrer"
                  target="_blank"
                  color="secondary"
                >
                  Join our Team
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default GetInvolved;
