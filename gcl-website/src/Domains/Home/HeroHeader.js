import { Typography } from '@mui/material';
import Header from '../../Components/Header';

const HeroHeader = () => {
  return (
    <Header>
      <img alt="Girls Code Lincoln" src="/assets/img/girlscodelincoln.svg" />

      <Typography variant="h5" component="p">
        Teaching girls about technology through creativity, community,
        collaboration, and confidence.
      </Typography>
    </Header>
  );
};

export default HeroHeader;
