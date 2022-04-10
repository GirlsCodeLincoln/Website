import {
  faFemale,
  faHandHoldingHeart,
  faLaptopCode,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography } from '@mui/material';
import IconStat from './IconStat';

const Impact = () => {
  const impactStats = [
    {
      figure: '20+',
      subtext: 'Multiweek Tech & Leadership Clubs Completed',
      icon: faLaptopCode,
    },
    {
      figure: '200+',
      subtext: 'Girls Impacted Through Clubs and Workshops',
      icon: faFemale,
    },
    {
      figure: '72%',
      subtext: 'of Girls Return for Two or More Semesters',
      icon: faRotate,
    },
    {
      figure: '50+',
      subtext: 'Volunteers Support Our Work',
      icon: faHandHoldingHeart,
    },
  ];

  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>
        Our Impact
      </Typography>
      <Grid container spacing={5}>
        {impactStats.map((impactStat) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={[impactStat.figure, impactStat.subtext].join(' ')}
          >
            <IconStat
              icon={impactStat.icon}
              figure={impactStat.figure}
              subtext={impactStat.subtext}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Impact;
