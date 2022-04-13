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
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="194"
              image="/assets/img/student-background.jpg"
              alt="Students with their completion certificates"
            />
            <CardContent>
              <Typography variant="h5">Student</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" disabled>
                Applications are closed
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="194"
              image="/assets/img/volunteer-background.jpg"
              alt="Volunteers planning club logistics"
            />
            <CardContent>
              <Typography variant="h5">Volunteer</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                href="/assets/pdf/GCL-Volunteer-Information.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Information
              </Button>
              <Button
                variant="contained"
                href="https://www.surveymonkey.com/r/2JNS682"
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
