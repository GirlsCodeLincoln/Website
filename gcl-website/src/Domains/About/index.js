import { Box, Container, Grid, Typography } from '@mui/material';
import Header from '../../Components/Header';
import PersonCard from './PersonCard';
import sampleImg from '../../Assets/clubs-background.jpg';

const About = () => {
  const leadershipTeamMembers = [
    {
      name: 'Val Stehlik',
      title: 'Director of Clubs',
      image: sampleImg,
    },
    {
      name: 'Ciara Baumert',
      title: 'Director of Volunteers',
      image: sampleImg,
      email: 'volunteers@girlscodelincoln.org'
    },
    {
      name: 'Vivian Jacobitz',
      title: 'Director of Curriculum',
      image: sampleImg,
    },
    {
      name: 'Leah Olson',
      title: 'Website Chair',
      image: sampleImg,
    },
  ];

  const boardMembers = [
    { name: 'Elsbeth Magilton', title: 'Board President' },
    { name: 'Abby Rogers' },
    { name: 'Angela Garbacz' },
    { name: 'Bonita Sharif' },
    { name: 'Danielle Miller' },
    { name: 'Jaxon McCue' },
    { name: 'Jenna Vitosh' },
    { name: 'Lana Zumbrunn' },
    { name: 'Maura Penas' },
    { name: 'Ron Gallagher' },
    { name: 'Ryan Olsen' },
    { name: 'Ryan Wolff' },
  ];

  return (
    <Box component="section">
      <Header>
        <Typography variant="h1" textAlign="center">
          About Us
        </Typography>
      </Header>

      <Container component="section">
        <Typography paragraph>
          Girls Code Lincoln is a 501(c)(3) nonprofit organization. We strive to
          ignite passion for technology and leadership in young girls with the
          long-term goal of closing the gender gap in STEM.
        </Typography>

        <Typography paragraph>
          We host multiweek technology clubs for 4th-9th grade girls. All clubs
          are completely free and 100% volunteer-run.
        </Typography>

        <Typography paragraph>
          We partner with Nebraska organizations and build in-house curriculum
          to teach technology, leadership, and life skills.
        </Typography>

        <Typography variant="h2">Leadership Team</Typography>
        <Grid container gap={2}>
          {leadershipTeamMembers.map((member) => (
            <Grid item xs={12} md={6} key={`${member.name}, ${member.title}`}>
              <PersonCard
                name={member.name}
                title={member.title}
                image={member.image}
                email={member.email}
              />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2">Board</Typography>
        <Grid container gap={2}>
          {boardMembers.map((member) => (
            <Grid item xs={12} md={6} key={`${member.name}, ${member.title}`}>
              <PersonCard
                name={member.name}
                title={member.title}
                image={member.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
