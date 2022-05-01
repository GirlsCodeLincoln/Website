import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const GetInvolved = () => {
  return (
    <Box
      component="section"
      id="get-involved"
      width="100%"
      sx={{
        background:
          "linear-gradient(rgba(242, 175, 228, 0.7), rgba(10, 75, 237, 0.9)), url('/assets/img/involvement-background.jpg')",
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
              image="/assets/img/student-background.jpg"
              alt="Students with their completion certificates"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ margin: 0 }}>
                Student
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" disabled>
                Applications are closed
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image="/assets/img/volunteer-background.jpg"
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
  );
};

export default GetInvolved;
