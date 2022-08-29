import { Box, Typography } from '@mui/material';
import Header from '../../Components/Header';
import ClubsOverview from './ClubsOverview';

const JoinClubs = () => {
  return (
    <Box component="main">
      <Header>
        <Typography variant="h1">Join Clubs</Typography>
      </Header>
      <ClubsOverview />
    </Box>
  );
};

export default JoinClubs;
