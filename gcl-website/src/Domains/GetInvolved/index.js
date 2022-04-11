import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';

const GetInvolved = () => {
  return (
    <section className="bg-grey col-12 py-5" id="get-involved">
      <Typography variant="h2" textAlign="center">
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
    </section>
  );
};

export default GetInvolved;
