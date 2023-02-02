import { Grid, Typography } from '@mui/material';
import PersonCard from './PersonCard';

import photoVal from './Assets/ValStehlik.jpg';
import photoCiara from './Assets/CiaraBaumert.jpg';
import photoVivian from './Assets/VivianJacobitz.jpg';
import photoLeah from './Assets/LeahOlson.jpg';

const LeadershipTeam = () => {
  const members = [
    {
      name: 'Val Stehlik',
      title: 'Director of Clubs',
      image: photoVal,
    },
    {
      name: 'Ciara Baumert',
      title: 'Director of Volunteers',
      image: photoCiara,
      email: 'volunteers@girlscodelincoln.org',
    },
    {
      name: 'Vivian Jacobitz',
      title: 'Director of Curriculum',
      image: photoVivian,
    },
    {
      name: 'Leah Olson',
      title: 'Website Chair',
      image: photoLeah,
    },
  ];

  return (
    <>
      <Typography variant="h2">Leadership Team</Typography>
      <Grid container spacing={4}>
        {members.map((member) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`${member.name}, ${member.title}`}
          >
            <PersonCard
              name={member.name}
              title={member.title}
              image={member.image}
              email={member.email}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LeadershipTeam;
