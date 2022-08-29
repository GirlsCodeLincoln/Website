import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import mentorsFoundImg from '../../Assets/sponsors/mentors.png';
import hudlImg from '../../Assets/sponsors/hudl.png';
import assurityImg from '../../Assets/sponsors/assurity.png';
import ameritasImg from '../../Assets/sponsors/ameritas.svg';
import dplImg from '../../Assets/sponsors/dpl.png';
import ngtcImg from '../../Assets/sponsors/NGTC.png';
import carlosImg from '../../Assets/partners/carlos.png';
import fuseImg from '../../Assets/partners/fuse.png';
import launchImg from '../../Assets/partners/launch.png';
import leturaImg from '../../Assets/partners/letura.png';
import makeshiftImg from '../../Assets/partners/makeshift.png';
import muchachosImg from '../../Assets/partners/muchachos.webp';
import selfidImg from '../../Assets/partners/selfid.png';

const sponsors = [
  {
    id: 'mentorsfound',
    name: 'Mentors Found',
    href: 'https://mentorsfound.com',
    logo: mentorsFoundImg,
  },
  {
    id: 'hudl',
    name: 'Hudl',
    href: 'https://www.hudl.com',
    logo: hudlImg,
  },
  {
    id: 'assurity',
    name: 'Assurity',
    href: 'https://www.assurity.com/',
    logo: assurityImg,
  },
  {
    id: 'ameritas',
    name: 'Ameritas',
    href: 'https://www.ameritas.com/',
    logo: ameritasImg,
  },
  {
    id: 'dpl',
    name: "Don't Panic Labs",
    href: 'https://dontpaniclabs.com/',
    logo: dplImg,
  },
  {
    id: 'ngtc',
    name: 'Nebraska Governance and Technology Center',
    href: 'https://ngtc.unl.edu/',
    logo: ngtcImg,
  },
];

const partners = [
  {
    id: 'muchachos',
    name: 'Muchachos',
    href: 'https://www.yomuchacho.com',
    logo: muchachosImg,
  },
  {
    id: 'launchleadership',
    name: 'Launch Leadership',
    href: 'https://www.launchleadership.org',
    logo: launchImg,
  },
  {
    id: 'fusecoworking',
    name: 'FUSE Coworking',
    href: 'https://www.fusecoworking.com',
    logo: fuseImg,
  },
  {
    id: 'makeshiftlincoln',
    name: 'Makeshift Lincoln',
    href: 'http://makeshiftlincoln.org',
    logo: makeshiftImg,
  },
  {
    id: 'selfimagedefined',
    name: 'Self Image Defined',
    href: 'https://www.selfimagedefined.org',
    logo: selfidImg,
  },
  {
    id: 'leturaidigima',
    name: 'Letura Idigima',
    href: 'https://leturaidigima.com',
    logo: leturaImg,
  },
  {
    id: 'carlosvelascodesign',
    name: 'Carlos Velasco Design',
    href: 'https://www.carlosvelascodesign.com',
    logo: carlosImg,
  },
];

const SponsorsAndPartners = () => {
  const theme = useTheme();

  return (
    <Container component="section" align="center">
      <Typography variant="h2" align="center">
        A Huge Thank You to Our Sponsors and Partners
      </Typography>

      <Typography variant="h3" align="center">
        Sponsors
      </Typography>
      <Grid
        container
        gap={5}
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(5)}
      >
        {sponsors.map((sponsor) => (
          <Grid item key={sponsor.id}>
            <Link
              href={sponsor.href}
              id={sponsor.id}
              rel="noopener noreferrer"
              target="_blank"
              key={sponsor.id}
            >
              <Box
                component="img"
                alt={sponsor.name}
                src={sponsor.logo}
                width={theme.spacing(30)}
                sx={{
                  transition: 'transform 0.3s ease',

                  // Hover effects
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },

                  // On mobile devices, do not show hover effects
                  '@media (hover: none)': {
                    '&:hover': {
                      transform: 'none',
                    },
                  },
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: theme.spacing(5) }} />

      <Typography variant="h3" align="center">
        Partners
      </Typography>
      <Grid
        container
        gap={5}
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(5)}
      >
        {partners.map((partner) => (
          <Grid item key={partner.id}>
            <Link
              href={partner.href}
              id={partner.id}
              rel="noopener noreferrer"
              target="_blank"
              key={partner.id}
            >
              <Box
                component="img"
                alt={partner.name}
                src={partner.logo}
                width={theme.spacing(30)}
                sx={{
                  transition: 'transform 0.3s ease',

                  // Hover effects
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },

                  // On mobile devices, do not show hover effects
                  '@media (hover: none)': {
                    '&:hover': {
                      transform: 'none',
                    },
                  },
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: theme.spacing(5) }} />

      <Button
        variant="contained"
        href="assets/pdf/GCL-Donation-Info.pdf"
        id="donatebutton"
        rel="noopener noreferrer"
        role="button"
        target="_blank"
      >
        Want to become a Sponsor or Partner?
      </Button>
    </Container>
  );
};

export default SponsorsAndPartners;
