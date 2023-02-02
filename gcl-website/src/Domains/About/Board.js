import { Grid, Typography } from '@mui/material';
import PersonCard from './PersonCard';

const Board = () => {
  const members = [
    {
      name: 'Elsbeth Magilton',
      title: 'President + Member of Nominating Committee',
      email: 'elsbeth@girlscodelincoln.org',
    },
    {
      name: 'Jenna Vitosh',
      title: 'Vice President + Member of Nominating Committee',
      email: 'jenna@girlscodelincoln.org',
    },
    {
      name: 'Bonita Sharif',
      title: 'Treasurer + Finance Committee Chair',
      email: 'bonita@girlscodelincoln.org',
    },
    {
      name: 'Danielle Miller',
      title: 'At Large Member + Finance Committee',
      email: 'danielle@girlscodelincoln.org',
    },
    {
      name: 'Lana Zumbrunn',
      title: 'At Large Member',
      email: 'lana@girlscodelincoln.org',
    },
    {
      name: 'Ron Gallagher',
      title: 'At Large Member',
      email: 'ron@girlscodelincoln.org',
    },
    {
      name: 'Jaxon McCue',
      title: 'At Large Member',
      email: 'jaxon@girlscodelincoln.org',
    },
    {
      name: 'Ryan Olsen',
      title: 'At Large Member',
      email: 'ryangrace@girlscodelincoln.org',
    },
    {
      name: 'Maura Penas',
      title: 'At Large Member',
      email: 'maura@girlscodelincoln.org',
    },
    {
      name: 'Abby Rogers',
      title: 'At Large Member',
      email: 'abby@girlscodelincoln.org',
    },
    {
      name: 'Ryan Wolff',
      title: 'At Large Member',
      email: 'ryan@girlscodelincoln.org',
    },
  ];

  return (
    <>
      <Typography variant="h2">Board</Typography>
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
              email={member.email}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Board;
